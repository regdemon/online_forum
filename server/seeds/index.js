const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")

const user_list = require("./data/random_users")
const userCrud = require("../crud/user")

mongoose.connect("mongodb://localhost:27017/forumdb")
    .then(()=>{
        console.log("Connected");
    })
    .catch((e)=>{
        console.log("Error",e)
    });

mongoose.connection.on('error', err => {
    console.log(err);
});

const seeddb = async()=>{
    await userCrud.deleteAll();
    for(let u of user_list){
        u["total_score"] = Math.floor(100*Math.random());
    }
    await userCrud.create(user_list);
}


seeddb().then(() => {
    mongoose.connection.close();
});



