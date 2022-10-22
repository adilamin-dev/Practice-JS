const myObj = {
	name: "Adil Amin",
	age: 24,
};

(myObj.name || myObj.age) && console.log(`Name: ${myObj.name} Age: ${myObj.age}`);