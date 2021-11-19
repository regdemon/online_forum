const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const morgan = require("morgan")
const ejsMate = require("ejs-mate")
const AppError = require("./AppError")

const userCrud = require("./crud/user")



app.engine("ejs", ejsMate)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))



mongoose.connect("mongodb://localhost:27017/forumdb")
    .then(() => {
        console.log("Databse connected on port 27017");
    })
    .catch((e) => {
        console.log("Database connection error: ", e)
    });

mongoose.connection.on('error', e => {
    console.log("Database connection error: ", e)
});


app.use(morgan('tiny'))


app.get("/", (req, res) => {
    res.render("home.ejs")
})


const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('password required', 401);
}


app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

app.get("/error",(req,res,next)=>{
    person.speak()
})

app.use((req, res, next) => {
    res.send("not found 404")
})

app.use((err, req, res, next) => {
    const {status = 500, message="Something went wrong"} = err
    res.status(status).send(message)
})


app.listen(3001, () => {
    console.log('App is running on localhost:3001')
})


