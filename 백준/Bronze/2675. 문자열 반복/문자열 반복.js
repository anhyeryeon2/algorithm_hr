let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let length = Number(input[0]);
let answer = '';

for (let i = 1 ; i <= length; i ++) {
    let arr = input[i].split(' ');
    let str = arr[1];
    for (let j = 0; j < arr[1].length; j++ ) {
        answer += str[j].repeat(arr[0]);
    }
    answer += '\n'
}
console.log(answer)