const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")

const userCrud = require("./crud/user")

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

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))


app.listen(3000, () => {
    console.log("Serving on port 3000");
});

app.get("/",(req, res)=>{
    res.send("Home Page")
});


//User Functionality
app.get("/createUser",(req, res)=>{
    userCrud.create({
        email_id: "raghav123@gmail.com",
        name: "Raghav Goyal",
        password: "abcdef@$#",
        total_score: 0
    });
    res.send("added user");
});

app.get("/findUser",async (req,res)=>{
    let user = await userCrud.getbyId(mongoose.Types.ObjectId('618ec3cd4b5d6022b0fc13bd'));
    if(!user)res.send("No user found")
    else res.send(user)
});
















// app.get("/", (req, res) => {
//     res.render("home");
// });

