const nums = [];
for(let i = 1; i < 1000; i += 1) {
  if(i % 3 === 0 || i % 5 === 0) {
    nums.push(i);
  }
}
const sum = nums.reduce((acc, cur) => acc + cur);
console.log(sum);