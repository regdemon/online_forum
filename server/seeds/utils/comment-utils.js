const Comment = require("../../models/comment")

const generateRandomComment = () => {
	return Comment.count().exec()
		.then((data)=>{
			var random = Math.floor(Math.random() * data);
			return Comment.findOne().skip(random).exec()
		})
		.then((data)=>{
			return data
		})
		.catch((err) => {
			console.log("Error: ",err)
		})
};

const generateRandomComments = async (used_comments)=>{
    var len = 10
    var comments = []
    for(let i=0; i<len; i++){
        var comment = await generateRandomComment();
        if(!used_comments.includes(comment._id)){
            comments.push(comment._id)
            used_comments.push(comment._id)
        }
    }
    return comments
}

module.exports = {
    generateRandomComment: generateRandomComment,
    generateRandomComments: generateRandomComments
}