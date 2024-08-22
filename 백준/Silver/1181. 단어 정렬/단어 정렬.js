//단어정렬

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
//단어의 개수와전체문자열 입력
let arr =[];
for(let i=1;i<=n;i++){
  arr.push(input[i]);
}

//중복된 원소 제거하기 위해 set으로 제거하고 배열로다시
arr = [ ...new Set(arr)]

arr.sort((a,b) => {
  //길이가 같으면 짧은것이 우선
  if (a.length != b.length)
    return a.length- b.length;
  else{
    //길이가 같으면 사전순으로
    if(a<b) return -1;
    else if(a>b) return 1;
    else return 0;
  }
});

for( let x of arr){
  console.log(x);
}