// Array Copy

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log('-----------------------');
const fruits2 = fruits.slice();
console.log(fruits2);

fruits2.push('yoyo2');
console.log(fruits2);
console.log(fruits);

console.log('-----------------------');
const fruits3 = [...fruits];
console.log(fruits3);

fruits3.push('yoyo3');
console.log(fruits3);
console.log(fruits);

console.log('-----------------------');
const fruits4 = Array.from(fruits);
console.log(fruits4);

fruits4.push('yoyo4');
console.log(fruits4);
console.log(fruits);