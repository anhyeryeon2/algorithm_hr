const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

let toPay = K;
let count = 0;

//큰 돈 부터
for (let coin of coins.reverse()) {
  if (toPay === 0) break;
  if (coin <= toPay) {
    count += Math.floor(toPay / coin);
    toPay %= coin;
  }
}
console.log(count);
