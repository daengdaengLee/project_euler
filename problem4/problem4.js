let result = [];
for(let i = 100; i < 1000; i += 1) {
  for(let j = 100; j < 1000; j += 1) {
    const num = i * j;
    const stringNum = String(num);
    const reverseStringNum = stringNum.split('').reverse().join('');
    if(stringNum === reverseStringNum) result.push(num);
  }
}
result.sort((a, b) => b - a);
console.log(result[0]);