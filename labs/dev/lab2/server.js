const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json()); // body parsing middleware to handle JSON in the body

// Products with id, name, price
let products = [
  { id: 1, name: 'Keyboard', price: 29.99 },
  { id: 2, name: 'Mouse', price: 14.99 },
  { id: 3, name: 'Monitor', price: 199.99 }
];

const ids = products.map (prodData => prodData.id)
const maxID = Math.max(...ids)
let newId = maxID;

//get all products
//READ
function getAllProducts() {
    return new Promise ((resolve,reject)=>{
        resolve(products);
    })
};

//READ 
//get products by id
function getProductByID(id) {
   
    return new Promise ((resolve, reject)=> {
        let foundIndex = products.findIndex(n=> n.id ==id);
        if (foundIndex < 0) {
            reject("No product found for this entered id")
        } else {
            resolve (products[foundIndex])
        }

    })
}

//POST
// add new product
function addProduct(newName, newPrice){
    return new Promise ((resolve, reject)=>{

        newId++;

        products.push ({
            id:  newId,
            name:newName,
            price:newPrice
        })
        resolve ({
            message: "Product Added!",
            product: products[products.length -1]
        })
    })
}
//PUT
//Update exsiting product by id
function updateProductById(id,newName, newPrice) {
    return new Promise ((resolve, reject)=>{
        let foundIndex = products.findIndex(n=> n.id ==id);

        if (foundIndex<0){
            reject("No products found with this ID!")
        }else {
            if (newName !== undefined ) {
                products[foundIndex].name = newName;
            }
            if (newPrice !== undefined ) {
                products[foundIndex].price = newPrice;
            }
            

            resolve({
                message: "Product Updated!",
                prodect: products[foundIndex]
            })
              
        }
    })
}

//delete

function  deleteProductByID(id) {
     return new Promise ((resolve,reject)=>{
        let foundIndex = products.findIndex(n=> n.id ==id);

        if (foundIndex < 0 ){
            reject("unable to delete, can not find product at that ID!")
        } else {
            products.splice(foundIndex,1);
            resolve("Product Deleted!")
        }
    })

}


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/lab2.html")
})

//GET
///all/Products
app.get("/allProducts", async(req,res)=>{
        res.status(200).send(await getAllProducts());

});

//GET
//get by single ID
app.get("/allProducts/:id", async(req,res)=>{
    try {
        res.status(200).send (await getProductByID(req.params.id));

    } catch (err) {
        res.status(404).send({message: err})

    }

});

//POST
app.post("/addProduct", async(req,res)=>{
    res.status(201).send(await  addProduct (
        req.body.name,
        req.body.price
    ))  

});

//Update item by ID
//PUT

app.put("/updateProduct/:id",async(req,res)=>{
      try{
        res.status(200).send( await  updateProductById(
            req.params.id,
            req.body.name,
            req.body.price
         ))

    } catch (err){
        res.status(404).send({message: err})
    }


});

//delete a item
//DELETE
app.delete("/deleteProduct/:id", async(req,res)=>{
    try {
        res.status(200).send( { message: await deleteProductByID(req.params.id) })


    } catch (err) {

        res.status(404).send ({message:err})
    }

});


app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}/`)
    console.log(`Press control + c to exit`)
});