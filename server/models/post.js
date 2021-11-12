const mongoose = require("mongoose")
const {Schema, model} = mongoose

const postSchema = new Schema({
	post_owner_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
	content: String,
	upvote_count: Number,
	downvote_count: Number,
	tags: [String],
	comments: [
		{
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
	]
},{timestamps: true});

const Post = model("Post", postSchema);

module.exports = Post;


