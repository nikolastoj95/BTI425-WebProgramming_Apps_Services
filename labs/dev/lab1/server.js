const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
//let personData =  require('./data.json');
let personData = require('./modules/peopleDataCRUD.js');

app.use(express.json()); // body parsing middleware to handle JSON in the body

//Endpoints
//CREATE
//POST
//add a new person 
app.post("/api/items",async(req,res)=>{
    res.status(201).send(await personData.addAPerson(
        req.body.firstName,
        req.body.lastName,
        req.body.email
    ))
});

//READ
//GET
// get all people
app.get("/api/items", async(req,res)=>{
    res.status(200).send(await personData.getAllPeople());
});

//GET
//get person from people list data
app.get("/api/items/:itemId",async (req,res)=>{
    try{
        res.status(200).send(await personData.getPeopleById(req.params.itemId));

    } catch (err){
        res.status(404).send({message: err})
    }
})


//UPDATE (PUT)
//update a person by there ID
app.put("/api/items/:itemId",async(req,res)=>{
    // if (req.body.firstName !== undefined) {
    //     newFirstName = req.body.firstName;
    // }
    //  if (req.body.lastName !== undefined) {
    //     newLastName = req.body.lastName;
    // }
    //  if (req.body.email !== undefined) {
    //     newEmail = req.body.email;
    // }

    try{
        res.status(200).send( await personData.updatePersonById(
            req.params.itemId,
            req.body.firstName,
            req.body.lastName,
            req.body.email
         ))

    } catch (err){
        res.status(404).send({message: err})

    }
})

//DELETE
//delete a person by ID
app.delete("/api/items/:itemId",async(req,res)=>{
    try{
        res.status(200).send({message: await personData.deletePersonById(req.params.itemId)} );

    } catch (err) {
        res.status(404).send({message: err})
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Press control + c to exit`);
});