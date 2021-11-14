const generateRandomSample=(array, len=1)=>{
	let gen = array.sort(() => Math.random() - Math.random()).slice(0, len);
	return gen;
}



module.exports = {
	generateRandomSample: generateRandomSample,
};