/* 
https://programmers.co.kr/learn/courses/30/lessons/84325?language=javascript

개발자가 사용하는 언어와 언어 선호도를 입력하면 그에 맞는 직업군을 추천해주는 알고리즘을 개발하려고 합니다.

아래 표는 5개 직업군 별로 많이 사용하는 5개 언어에 직업군 언어 점수를 부여한 표입니다.

점수	SI	        CONTENTS	  HARDWARE	  PORTAL	      GAME
5	    JAVA	      JAVASCRIPT	C	          JAVA	        C++
4	    JAVASCRIPT	JAVA	      C++	        JAVASCRIPT	  C#
3	    SQL	        PYTHON	    PYTHON	    PYTHON	      JAVASCRIPT
2	    PYTHON	    SQL	        JAVA	      KOTLIN	      C
1	    C#	        C++	        JAVASCRIPT	PHP	          JAVA

예를 들면, SQL의 SI 직업군 언어 점수는 3점이지만 CONTENTS 직업군 언어 점수는 2점입니다. SQL의 HARDWARE, PORTAL, GAME 직업군 언어 점수는 0점입니다.

직업군 언어 점수를 정리한 문자열 배열 table, 개발자가 사용하는 언어를 담은 문자열 배열 languages, 언어 선호도를 담은 정수 배열 preference가 매개변수로 주어집니다. 
개발자가 사용하는 언어의 언어 선호도 x 직업군 언어 점수의 총합이 가장 높은 직업군을 return 하도록 solution 함수를 완성해주세요. 총합이 같은 직업군이 여러 개일 경우, 
이름이 사전 순으로 가장 빠른 직업군을 return 해주세요.
*/

function solution_my(table, languages, preference) {
  const result = table
    .map((n) => {
      const group = n.split(" ");
      return {
        job: group[0],
        [group[1]]: 5,
        [group[2]]: 4,
        [group[3]]: 3,
        [group[4]]: 2,
        [group[5]]: 1,
      };
    })
    .map((n) => {
      return {
        job: n.job,
        score: languages
          .map((m, i) => (n[m] ? n[m] * preference[i] : 0))
          .reduce((acc, cur) => acc + cur),
      };
    })
    .sort((a, b) => b.score - a.score || a.job.localeCompare(b.job, "en"));

  return result[0].job;
}

console.log(
  solution_my(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["PYTHON", "C++", "SQL"],
    [7, 5, 5]
  )
);
console.log(
  solution_my(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
  )
);

function solution_best(table, languages, preference) {
    return table.map((r) => r.split(' '))
                .map((t) => [...t.splice(0, 1), t])
                .map(([t, arr]) => [t,
                     languages.reduce((acc, l, i)=> {
                        acc += (5 - (arr.indexOf(l) === -1 ? 5 : arr.indexOf(l)))
                                    * preference[i];
                        return acc;
                     }, 0)])
                .sort((a, b) => b[1] - a[1] - (a[0] < b[0]))[0][0]
}

console.log(
  solution_best(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
  )
);