let nums = new Set([1, 2, 3, 4]);
let numIterator = nums.values();

nums.forEach((i) => {
  console.log(i)
});

for (let i of numIterator) {
  console.log(i)
}


console.log(nums.keys());