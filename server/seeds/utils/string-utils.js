const tags = require("../data/random_tags");

const generateRandomString = (len) => {
	let result = "";
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let charactersLength = characters.length;
	for (let i = 0; i < len; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

const generateRandomTags = (len) => {
	const array = tags;
	let generatedTags = array.sort(() => Math.random() - Math.random()).slice(0, len);
	return generatedTags;
};

module.exports = {
	generateRandomString: generateRandomString,
	generateRandomTags: generateRandomTags,
};


