function makeFibonacci(max, arr = [1, 1]) {
  const len = arr.length;
  if(arr[len - 1] > max) return arr.slice(0, len - 1);
  const newArr = [...arr, arr[len - 2] + arr[len - 1]];
  return makeFibonacci(max, newArr);
}
const fibonacciNums = makeFibonacci(4000000, [1, 2]);
const sum = fibonacciNums.reduce((acc, cur) => {
  if(cur % 2 === 0) return acc + cur;
  return acc;
}, 0);
console.log(sum);