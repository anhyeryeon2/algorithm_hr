let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];
let answer = "";

function dfs(arr, depth, start) {
  if (depth == m) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = start; i < arr.length; i++) {
    selected.push(arr[i]);
    dfs(arr, depth + 1, i + 1);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer.trim());
