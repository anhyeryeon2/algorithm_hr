function dfs(result, depth, n){
  if(depth == n-1){
    let str = '';
    for(let i = 0; i < n-1; i++) str += arr[i] + result[i];
    str += arr[n-1] + '';
    let current = eval(str.split(' ').join(''));
    if(current == 0) console.log(str);
    return;
  }
  for(let x of [' ', '+', '-']){
    result.push(x);
    dfs(result, depth + 1, n);
    result.pop();
  }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
for(let tc = 1; tc <= testCase; tc++){
  let n = Number(input[tc]);
  arr = [];
  for(let i = 1; i <= n; i++) arr.push(i);
  dfs([], 0, n);
  if (tc < testCase) console.log();
}
