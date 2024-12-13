let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

//한자리수 입력받기?
//그러고 30배수니까 입력받은 거 하나씩 분리하고, 앞에서부터 내림차순으로.!!!!

const splitedInput = input.split("").map(Number);

//합이 3의 배수, 0이 포함되어야함
if (
  !splitedInput.includes(0) ||
  splitedInput.reduce((a, b) => a + b, 0) % 3 !== 0
) {
  console.log(-1);
} else {
  splitedInput.sort((a, b) => b - a);
  console.log(splitedInput.join(""));
}
