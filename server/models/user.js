const mongoose = require("mongoose")
const {Schema, model} = mongoose

const userSchema = new Schema({
	email_id: String,
    name: String,
    password: String,
	joined: Date,
    total_score: Number
}, {timestamps: true});

const User = model("User", userSchema);

module.exports = User;


