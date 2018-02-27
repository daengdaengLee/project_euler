function findLastOnePythagorean(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function findPythagorean(sum) {
  for(let i = 1; i < sum / 2; i += 1) {
    for(let j = i; j < sum / 2; j += 1) {
      if(i + j + findLastOnePythagorean(i, j) === sum) return [i, j, findLastOnePythagorean(i, j)];
    }
  }
}

const result = findPythagorean(1000);
const produnct = result.reduce((acc, cur) => acc * cur);
console.log(produnct);