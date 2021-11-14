const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")

const userCrud = require("../crud/user")
const postCrud = require("../crud/post")
const commentCrud = require("../crud/comment")

const user_data = require("./data/random_users")
const moderation_status_list = require("./data/moderation_status")

const user_utils = require("./utils/user-utils")
const string_utils = require("./utils/string-utils")
const array_utils = require("./utils/array-utils")
const comment_utils = require("./utils/comment-utils")

mongoose.connect("mongodb://localhost:27017/forumdb")
    .then(() => {
        console.log("Connected");
    })
    .catch((e) => {
        console.log("Error", e)
    });

mongoose.connection.on('error', err => {
    console.log(err);
});

const seedusers = async () => {
    await userCrud.deleteAll();
    const users = user_data
    for (let u of users) {
        u["total_score"] = Math.floor(100 * Math.random());
    }
    await userCrud.create(users);
    console.log("users seeded")
}


const seedcomments = async()=>{
    await commentCrud.deleteAll();
    const len = 200
    for (let i = 0; i < len; i++) {
        const newComment = {}
        newComment.comment_msg = string_utils.generateRandomString(Math.floor(20 + Math.random() * 200));
        var user = await user_utils.generateRandomUser();
        newComment.post_owner_id = user._id;
        newComment.moderation_status = array_utils.generateRandomSample(moderation_status_list,1)[0]
        newComment.status = Math.random()>0.5?true:false;
        await commentCrud.create(newComment);
    }
    console.log("comments seeded")
}

const seedposts = async () => {
    await postCrud.deleteAll();
    const len = 20
    const used_comments = []
    for (let i = 0; i < len; i++) {
        const newPost = {}
        newPost.content = string_utils.generateRandomString(Math.floor(500 + Math.random() * 1000));
        newPost.upvote_count = Math.floor(500 + Math.random() * 100);
        newPost.downvote_count = Math.floor(500 + Math.random() * 100);
        newPost.tags = string_utils.generateRandomTags(2 + Math.random(13));
        newPost.comments = await comment_utils.generateRandomComments(used_comments)
        var user = await user_utils.generateRandomUser();
        newPost.post_owner_id = user._id;
        await postCrud.create(newPost);
    }
    console.log("posts seeded")
}



seedusers()
    .then(() => {
        return seedcomments()
    })
    .then(() => {
        return seedposts()
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err)
    })



