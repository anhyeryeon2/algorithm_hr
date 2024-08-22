//좌표압축

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

//집합-> 배열
let uniarr = [...new Set(arr)];
uniarr.sort((a,b) => a-b);

//0부터 매핑 수행
let myMap = new Map();
for(let i =0 ;i<uniarr.length;i++){
  myMap.set(uniarr[i],i);
}

answer ="";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);