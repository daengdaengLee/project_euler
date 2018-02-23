function findPrimeFactor(num, arr = []) {
  const max = Math.floor(Math.sqrt(num));
  let newNum = num;
  for(let i = 2; i <= max; i += 1) {
    if(num % i === 0) {
      while(newNum % i === 0) {
        newNum /= i;
      }
      return findPrimeFactor(newNum, [...arr, i]);
    }
  }
  return [...arr, num];
}
const primeFactors = findPrimeFactor(600851475143);
console.log(primeFactors[primeFactors.length - 1]);