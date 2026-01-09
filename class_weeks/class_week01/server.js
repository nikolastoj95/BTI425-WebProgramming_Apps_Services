const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const nameData = require("./modules/nameData")

app.get((req,res)=>{
    res.send
})


const startServer = () =>{
    console.log(`Server Running on http://localhost:${port}`)
    console.log(`Press Contorl + C to exit`)
};
app.listen(startServer, port);