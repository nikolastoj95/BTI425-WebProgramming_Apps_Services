const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const path = require ("path");

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/bootstrap",(req,res)=>{
    res.sendFile(__dirname + "/views/bootstrap.html")
});

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}/`)
    console.log(`Press control + c to exit`)
});