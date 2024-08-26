//모든 중복 순열 - 중복가능

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];

let answer = "";

function dfs(arr, depth) {
  if (depth == m) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    selected.push(arr[i]);
    dfs(arr, depth + 1);
    selected.pop();
  }
}
dfs(arr, 0);
console.log(answer);

