let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = parseInt(input[0]);
let tipArr = input.slice(1).map(Number);
tipArr.sort((a, b) => b - a); //내림차순

let totalTip = 0;
for (let i = 0; i < N; i++) {
  const tip = tipArr[i] - i;
  if (tip > 0) {
    totalTip += tip;
  }
}
console.log(totalTip);