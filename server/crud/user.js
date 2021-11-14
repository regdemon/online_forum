const User = require("../models/user");

async function createUser(users){
    //const newUser = new User(user);
    await User.insertMany(users);
}   

function getUserbyId(id){
    var promise = User.findById(id).exec();
    return promise;
}

function updateUserById(id, update){
    User.findByIdAndUpdate(id, update, function (err, doc){
        if (err){
            console.log("Error", err);
        }
        else{
            if(doc === null)console.log("no user found");
            else console.log("update successful");
        }
    })
}

function deleteUserById(id){
    User.findByIdAndRemove(id, function (err, doc){
        if (err){
            console.log("Error", err);
        }
        else{
            if(doc === null)console.log("no user found");
            else console.log("deletion successful");
        }
    })
}

async function deleteAllUsers(){
    const res = await User.remove({})
}

module.exports = {
    create: createUser, 
    getById: getUserbyId,
    updateById: updateUserById,
    deleteById: deleteUserById,
    deleteAll: deleteAllUsers,
}
