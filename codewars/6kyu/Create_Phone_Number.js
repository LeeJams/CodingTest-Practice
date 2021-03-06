/* 
  https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.
  Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers){
  const first = numbers.slice(0,3);
  const second = numbers.slice(3,6);
  const third = numbers.slice(6);
  return `(${first.join("")}) ${second.join("")}-${third.join("")}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // (123) 456-7890

function createPhoneNumber_best1(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
function createPhoneNumber_best2(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}
console.log(createPhoneNumber_best([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // (123) 456-7890