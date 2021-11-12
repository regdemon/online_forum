const User = require("../models/user");

async function createUser(user){
    const newUser = new User(user);
    await User.insertMany(newUser);
}   

function getUserbyId(id){
    var promise = User.findById(id).exec();
    return promise;
}

function updateUser(){

}

function deleteUser(){

}

async function deleteAllUsers(){
    const res = await User.remove({})
}

module.exports = {
    create: createUser, 
    getbyId: getUserbyId,
    deleteAll: deleteAllUsers,
}
