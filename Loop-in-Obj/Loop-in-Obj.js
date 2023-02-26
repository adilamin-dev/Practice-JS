var obj = {
  Bangladesh: 'Dhaka',
  India: 'Delhi',
  Nepal: 'Kathmandu',
  Afganistan: 'Kabul',
  Thailand: 'Bangkok'
}

for (name in obj){
  console.log(`${name}'s capital name is ${obj[name]}.`)
}

//console.log(obj.constructor === Object)

console.log(Object.values(obj))

console.log(Object.keys(obj))

let contries = Object.keys(obj);

contries.map((contry) => {
  console.log(`${contry}'s capital is ${obj[contry]}.`)
})
