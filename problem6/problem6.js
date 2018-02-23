function squareSum(n) {
  let result = 0;
  for(let i = 1; i <= n; i += 1) {
    result += (i * i);
  }
  return result;
}

function sumSquare(n) {
  let sum = 0;
  for(let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum * sum;
}

console.log(sumSquare(100) - squareSum(100));