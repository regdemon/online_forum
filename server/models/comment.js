const mongoose = require("mongoose")
const {Schema, model} = mongoose

const commentSchema = new Schema({
	comment_msg: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    password: String,
	moderation_status: String,
	status: Boolean
}, {timestamps: true});

const Comment = model("User", commentSchema);

module.exports = Comment;


