const Comment = require("../models/Comment");

async function createComment(Comment){
    //const newComment = new Comment(Comment);
    await Comment.insertMany(Comments);
}   

function getCommentbyId(id){
    var promise = Comment.findById(id).exec();
    return promise;
}

function updateCommentById(id, update){
    Comment.findByIdAndUpdate(id, update, function (err, doc){
        if (err){
            console.log("Error", err);
        }
        else{
            if(doc === null)console.log("no Comment found");
            else console.log("update successful");
        }
    })
}

function deleteCommentById(id){
    Comment.findByIdAndRemove(id, function (err, doc){
        if (err){
            console.log("Error", err);
        }
        else{
            if(doc === null)console.log("no Comment found");
            else console.log("deletion successful");
        }
    })
}

async function deleteAllComments(){
    const res = await Comment.remove({})
}

module.exports = {
    create: createComment, 
    getById: getCommentbyId,
    updateById: updateCommentById,
    deleteById: deleteCommentById,
    deleteAll: deleteAllComments,
}
