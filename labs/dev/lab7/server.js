const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

require('dotenv').config();

const userService = require('./user-service.js');

const app = express();

const HTTP_PORT = process.env.PORT || 8080;


app.get("/", (req,res)=>{
    res.status(200).send({message: "It works"});
})




app.listen(HTTP_PORT, ()=>{
    console.log("App listening on: " + HTTP_PORT);
});

