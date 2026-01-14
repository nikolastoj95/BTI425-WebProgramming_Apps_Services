let peopleData = require('./data.json')
let newId = peopleData.length;
console.log(newId)

const ids = peopleData.map(pData => pData.id)
console.log(ids)

const maxId = Math.max(...ids)
console.log(maxId)
const idNew = maxId +1;
console.log(idNew)

//CREATE
// add a new person
function addAPerson(newfName, newlName, newEmail ){
    
    return new Promise ((resolve,reject)=>{
        newId++;
        peopleData.push({
            id:newId, 
            firstName:newfName, 
            lastName: newlName, 
            email: newEmail 
        })
        resolve("Person Added!")

    })
}

//READ
//get all people
function getAllPeople(){
    return new Promise ((resolve, reject)=>{
        resolve(peopleData)
    })
};

// get a person from people Data by id
function getPeopleById(id) {
    return new Promise ((resolve,reject)=>{
        let foundIndex = peopleData.findIndex(n=> n.id ==id);

        if ( foundIndex < 0 ) {
            reject("No person found with this id!")
        } else {
            resolve(peopleData[foundIndex])
        }
    })
}

//UPDATE (PUT)
// update an exsiting person by id 
function updatePersonById(id, newFName, newLName, newEmail) {
    return new Promise ((resolve, reject)=>{
        let foundIndex = peopleData.findIndex(n=> n.id ==id);

        if (foundIndex<0){
            reject("No person found with this ID!")
        }else {
            if (newFName !== undefined ) {
                peopleData[foundIndex].firstName = newFName;
            }
            if (newLName !== undefined ) {
                peopleData[foundIndex].lastName = newLName;
            }
            if (newEmail !== undefined ) {
                peopleData[foundIndex].email = newEmail;
            }

            resolve({
                message: "Person Updated!",
                person: peopleData[foundIndex]
            })
            
            
        }
    })
}

//DELETE
// delete / remove a person by there id
function deletePersonById(id){
    return new Promise ((resolve,reject)=>{
        let foundIndex = peopleData.findIndex(n=> n.id ==id);

        if (foundIndex < 0 ){
            reject("unable to delete, can not find person at that ID!")
        } else {
            peopleData.splice(foundIndex,1);
            resolve("Person Deleted!")
        }
    })

}



module.exports= {getAllPeople,getPeopleById, addAPerson, updatePersonById,deletePersonById};