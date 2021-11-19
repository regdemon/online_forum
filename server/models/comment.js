//ToDo
//adding subcomments

const mongoose = require("mongoose")
const {Schema, model} = mongoose

const commentSchema = new Schema({
	comment_msg: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
	moderation_status: String, //under-review, blacklisted, whitelisted
	status: Boolean //active,inactive
}, {timestamps: true});

const Comment = model("Comment", commentSchema);

module.exports = Comment;


