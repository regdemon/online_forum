const User = require("../../models/user")

const generateRandomUser = () => {
	return User.count().exec()
		.then((data)=>{
			var random = Math.floor(Math.random() * data);
			return User.findOne().skip(random).exec()
		})
		.then((data)=>{
			return data
		})
		.catch((err) => {
			console.log("Error: ",err)
		})
};

module.exports = {
    generateRandomUser: generateRandomUser,
}