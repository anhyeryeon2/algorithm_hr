let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

//N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램

let n = Number(input[0]);
let arr = [];
for(let i=1;i<=n;i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected =[];

let answer ="";
function dfs(arr,depth){
  if(depth==n){
    let result =[];
    for(let i of selected ) result.push(arr[i]);
    for(let x of result) answer += x +" ";
    answer += "\n";
    return ; 
  }
  for(let i =0; i<arr.length;i++){
    if(visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr,depth+1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr,0);
console.log(answer);