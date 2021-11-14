const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const morgan = require("morgan")
const ejsMate = require("ejs-mate")

const userCrud = require("./crud/user")

mongoose.connect("mongodb://localhost:27017/forumdb")
    .then(()=>{
        console.log("Databse connected on port 27017");
    })
    .catch((e)=>{
        console.log("Database connection error: ",e)
    });

mongoose.connection.on('error', e => {
    console.log("Database connection error: ",e)
});

app.set("ejs", "ejsMate")
app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))


app.use(morgan('common'))

app.use((req, res, next)=>{
    console.log(req.query)
    next();
})

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
    let user = await userCrud.getById(mongoose.Types.ObjectId('618ec3cd4b5d6022b0fc13bd'));
    if(!user)res.send("No user found")
    else res.send(user)
});

app.get("/updateUser",(req,res)=>{
    userCrud.updateById(
        mongoose.Types.ObjectId('618ec3cd4b5d6022b0fc13be'), 
        {email_id: 'raghavgoyal@hotmail.com',  total_score: 10}
    );
    res.send("Updation")
});


app.get("/deleteUser",(req,res)=>{
    userCrud.deleteById(
        mongoose.Types.ObjectId("618ec3cd4b5d6022b0fc13bd"), 
    );
    res.send("Deletion")
});

app.use((req, res, next)=>{
    res.status(404).send("Not Found")
})  

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})


