let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(x => Number(x));
//숫자배열로 만들었음

let minValue = data.reduce((a,b)=> Math.min(a,b));
let maxValue = data.reduce((a,b)=> Math.max(a,b));

console.log(minValue +  " "+ maxValue);