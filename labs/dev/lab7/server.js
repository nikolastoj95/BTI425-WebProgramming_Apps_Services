const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;


app.get("/", (req,res)=>{
    res.status(200).send({message: "It works"});
})




app.listen(HTTP_PORT, ()=>{
    console.log("App listening on: " + HTTP_PORT);
});

