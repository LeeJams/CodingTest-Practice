/* 
  https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

  Digital root is the recursive sum of all the digits in a number.

  Given n, take the sum of the digits of n. 
  If that value has more than one digit, 
  continue reducing in this way until a single-digit number is produced. 
  The input will be a non-negative integer.

  16  -->  1 + 6 = 7
  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n) {
  if(n > 9){
    const newN = n.toString().split("").reduce((acc, cur) => {return acc + parseInt(cur)}, 0);
    return digital_root(newN)
  }else{
    return n
  }
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));

function digital_root_bset(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root_bset(16));
console.log(digital_root_bset(942));
console.log(digital_root_bset(132189));
console.log(digital_root_bset(493193));