/* 
  https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

  Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

  pyramid(0) => [ ]
  pyramid(1) => [ [1] ]
  pyramid(2) => [ [1], [1, 1] ]
  pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
  Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
  const answer = []
  for(let i = 0; i < n; i++){
    const arr = []
    for(let j = 0; j <= i; j++){
      arr.push(1);
    }
    answer.push(arr);
  }
  return answer;
}

console.log(pyramid(0)); // []
console.log(pyramid(1)); // [[1]]
console.log(pyramid(2)); // [[1], [1, 1]]
console.log(pyramid(3)); // [[1], [1, 1], [1, 1, 1]]

function pyramid_best(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push(Array(i+1).fill(1))
  }
  return res;
}

function pyramid(n) {
  return Array(n).fill().map((e,i)=>Array(i+1).fill(1))
}

console.log(pyramid_best(0)); // []
console.log(pyramid_best(1)); // [[1]]
console.log(pyramid_best(2)); // [[1], [1, 1]]
console.log(pyramid_best(3)); // [[1], [1, 1], [1, 1, 1]]