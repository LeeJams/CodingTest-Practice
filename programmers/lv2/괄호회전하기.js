/* 
괄호 회전하기

문제 설명

다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

- (), [], {} 는 모두 올바른 괄호 문자열입니다.
- 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
- 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 
이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 1,000 이하입니다.

입출력 예
s	          result
"[](){}"	  3
"}]()[{"	  2
"[)(]"	    0
"}}}"	      0
*/

function solution(s) {
  let result = 0;
  let arr = s.split("");

  const open = ["[", "(", "{"];
  const close = ["]", ")", "}"];

  for (let i = 0; i < s.length; i++) {
    let check = true;
    let start = [];

    for (let j = 0; j < arr.length; j++) {

      if (open.includes(arr[j])) start.push(arr[j]);
  
      if (close.includes(arr[j])) {
        if(!start.length){
          check = false;
          break;
        }
        const startIdx = open.indexOf(start[start.length-1]);
        const endIdx = close.indexOf(arr[j])
        
        if(startIdx !== endIdx){
          check = false;
          break;
        }
        start.pop();
      }

    }

    if(check){
      result += !start.length ? 1 : 0;
    }
    arr = [...arr.slice(-1), ...arr.slice(0, arr.length - 1)];
  }

  return result;
}

/* function solution(s) {
  let result = 0;
  let arr = s.split("");

  let start = [];

  const open = ["[", "(", "{"];
  const close = ["]", ")", "}"];

  for (let i = 0; i < s.length; i++) {
    // const checkNum = [0, 0, 0];
    let check = true;

    for (let j = 0; j < arr.length; j++) {
      // if (arr[j] === "[") checkNum[0] += 1;
      // if (arr[j] === "]") checkNum[0] -= 1;
      // if (arr[j] === "(") checkNum[1] += 1;
      // if (arr[j] === ")") checkNum[1] -= 1;
      // if (arr[j] === "{") checkNum[2] += 1;
      // if (arr[j] === "}") checkNum[2] -= 1;

      if (open.includes(arr[j])) start.push(arr[j]);
  
      if (close.includes(arr[j])) {
        if(!start.length){
          check = false;
          break;
        }
        const startIdx = open.indexOf(start[start.length-1]);
        const endIdx = close.indexOf(arr[j])
        
        if(startIdx !== endIdx){
          check = false;
          break;
        }
        start.pop();
      }

      // if (checkNum.includes(-1)) {
      //   check = false;
      //   break;
      // }
    }

    // if (checkNum.filter((n) => n !== 0).length) {
    //   check = false;
    // }
    result += check ? 1 : 0;
    arr = [...arr.slice(-1), ...arr.slice(0, arr.length - 1)];
  }

  return result;
} */

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
console.log(solution("([{)}]")); // 0
console.log(solution("([{}])")); // 0
console.log(solution("((()")); // 0
