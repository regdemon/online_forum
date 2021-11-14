const Post = require("../models/post");

async function createPost(post){
    //const newPost = new Post(Post);
    await Post.insertMany(Posts);
}   

function getPostbyId(id){
    var promise = Post.findById(id).exec();
    return promise;
}

function updatePostById(id, update){
    Post.findByIdAndUpdate(id, update, function (err, doc){
        if (err){
            console.log("Error", err);
        }
        else{
            if(doc === null)console.log("no Post found");
            else console.log("update successful");
        }
    })
}

function deletePostById(id){
    Post.findByIdAndRemove(id, function (err, doc){
        if (err){
            console.log("Error", err);
        }
        else{
            if(doc === null)console.log("no Post found");
            else console.log("deletion successful");
        }
    })
}

async function deleteAllPosts(){
    const res = await Post.remove({})
}

module.exports = {
    create: createPost, 
    getById: getPostbyId,
    updateById: updatePostById,
    deleteById: deletePostById,
    deleteAll: deleteAllPosts,
}
