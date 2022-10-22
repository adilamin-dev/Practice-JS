// const age = 24;
console.log(age > 18 ? `You are adult.` : `You are child.`);

const myObj = {
	name: "Adil Amin",
	age: 24,
    job: "Frontend web developer."
};

console.log(myObj.name ? myObj.age ? myObj.job ? `Got all info` : `Job not found.` : `Age not found.` : `Name not found.`);