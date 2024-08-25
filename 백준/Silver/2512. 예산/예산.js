let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); //지방의 수 N
let arr = input[1].split(' ').map(Number); //지방의 예산
let m = Number(input[2]) // 총 예산 m 

let start = 1; //이진탐색을 위한 시작점, 끝점 설정
let end = Math.max(...arr); 

let result =0;
while(start<=end){
  let mid = parseInt((start+end)/2); //현재의 중간점 
  let total =0; //배정된 예산의 총액 계산
  for (let x of arr){  //각 지방에서 요청한 예산을 하나씩 확인하며
    total +=Math.min(mid,x); //예산 배정
  }
  if(total<=m){ // 조건 만족하면, 중간점을 result에 저장,증가시킴
    result = mid;
    start = mid+1;
}
  else{
    end = mid-1;
  }
}
console.log(result);