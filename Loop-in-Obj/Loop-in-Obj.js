var obj = {
  Bangladesh: 'Dhaka',
  India: 'Delhi',
  Nepal: 'Kathmandu',
  Afganistan: 'Kabul',
  Thailand: 'Bangkok'
}

for (kname in obj){
  console.log(`${kname}'s capital name is ${obj[kname]}.`)
}

//console.log(obj.constructor === Object)

console.log(Object.values(obj))

console.log(Object.keys(obj))

let contries = Object.keys(obj);

contries.map((contry) => {
  console.log(`${contry}'s capital is ${obj[contry]}.`)
})
