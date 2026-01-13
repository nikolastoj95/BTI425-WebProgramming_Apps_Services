let names = [];
let idx = 0;

//CREATE
function addName (newName){
    return new Promise ((resolve, reject) => {
        // put async code in here
        idx++;
        names.push({id:idx, name: newName});
        resolve ("name added")
    })
}

//READ
// arrow functions for call backs const function_name = () => {}
// modules use  function function_name () {}
function getAllNames() {
    return new Promise((resolve, reject) => {
        resolve(names);
    })
}
function getNameById(id){
    return new Promise((resolve, reject)=> {
        let foundIndex = names.findIndex(n=> n.id == id);
        //always be +  1 or - 1 
        // -1 can not find or +1 if found

        if (foundIndex === -1) {
            reject("unable to find name")
        } else {
            //let found_index= names[foundIndex];
            resolve(names[foundIndex])
        }

    })
}
// promise
    // takes a while to pull data, not insteat , waiting for promise to resolve
// async and await


//UPDATE
function updateNameById (id, newName) {
    return new Promise ((resolve, reject)=> {
        let foundIndex = names.findIndex(n=> n.id == id);

        if (foundIndex === -1){
            reject ("unable to find Name")
        } else {
           // found name, update it then
           names[foundIndex].name = newName;
           resolve("Name updated!")
        }
    })
}

//DELETE

function deleteNameById (id) {
    return new Promise ((resolve,reject)=> {
        let foundIndex = names.findIndex(n=> n.id == id);
        if (foundIndex === -1){
            reject ("unable to find Name")
        } else {
           // found name, then remove from list splice
           names.splice(foundIndex,1);
           // index, 1 delete
           resolve("name deleted!!")
           
        }

    })
}

module.exports = {getAllNames, addName, getNameById, updateNameById,deleteNameById}