require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');


const userService = require('./user-service.js');
const books = require('./books.json');
const app = express();

app.use(cors());
app.use(express.json());
const HTTP_PORT = process.env.PORT || 8080;

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let JwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey : process.env.SECRET,
};

let strategy = new JwtStrategy(JwtOptions, function (jwt_payload, next){
    console.log('payload received', jwt_payload);

    if (jwt_payload) {
        next (null, {
            _id: jwt_payload._id,
            userName: jwt_payload.userName,
            fullName: jwt_payload.fullName,
            role: jwt_payload.role,
            message: "jwt strategy!!"
        });
    } else {
        next (null, false);
    }
});

// tell passport to use out stagty
passport.use(strategy);

// add passport as application-level middleware
app.use(passport.initialize());

app.post("/api/register",(req,res) =>{
    userService.registerUser(req.body).then (resolvedMessage =>{
        res.status(201).send({message: resolvedMessage});
    }).catch(err => {
        res.status(422).send({message:err})
    })
});

app.post("/api/login",(req,res)=>{
    userService.checkUser(req.body).then(result=> {
        let payload = {
            _id: result.user._id,
            userName: result.user.userName,
            fullName: result.user.fullName,
            role: result.user.role,
        };

        let token = jwt.sign(payload, JwtOptions.secretOrKey);

        res.status(200).send({user: result.user ,message: result.message, token: token })
        console.log(payload)
    });
})

// app.get("/api/books",(req,res)=>{

// })




// app.get("/",(req,res)=>{
//     res.send(books)
// })








userService.connect().then(()=>{
    console.log(`App (Mongo Db connected) is listening on:  ${HTTP_PORT}`)
}).catch (err=>{
    console.log(err)
})

app.listen(HTTP_PORT, ()=>{
    console.log("App listening on: " + HTTP_PORT);
});

