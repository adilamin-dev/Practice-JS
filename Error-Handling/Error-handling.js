try{
	let age = 4;
	if(age < 18){
	throw new Error(`You are too Young! So You unable to vote.`);
}else{
	console.log(`You are able to vote.`);	
};
}catch(err){
	console.log(err);
}