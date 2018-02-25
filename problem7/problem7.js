function isPrime(n) {
  let result = true;
  const limit = Math.floor(Math.sqrt(n));
  for(let i = 2; i <= limit; i += 1) {
    if(n % i === 0) result = false;
  }
  return result;
}

function nextPrime(n) {
  let i = n + 1;
  while(true) {
    if(isPrime(i)) return i;
    i += 1;
  }
}

function nPrimes(n) {
  let result = [2];
  while(result.length < n) {
    result.unshift(nextPrime(result[0]));
  }
  return result;
}

const result = nPrimes(10001);
console.log(result[0]);