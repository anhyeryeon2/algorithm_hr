let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);

let c = Number(input[1]);

let totalMinute = a * 60 + b + c;
//전부 분 형태로 바꾸기

totalMinute %= 1440;
//1440분은 하루를 의미하므로
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);
