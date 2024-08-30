const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, nums, operators] = input;

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const calculator = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => parseInt(a / b),
];

// 재귀적으로 모든 연산자의 조합을 시도하는 함수입니다.
function dfs(count, currentResult) {
  // 기저 조건: 모든 연산자를 사용한 경우
  if (count === N - 1) {
    // 현재 결과와 비교하여 최댓값, 최솟값 갱신
    max = Math.max(max, currentResult);
    min = Math.min(min, currentResult);
    return;
  }

  // 각 연산자를 순회하며 연산을 수행
  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) { // 해당 연산자가 남아 있는 경우에만 수행
      operators[i]--; // 연산자 사용
      // 재귀 호출을 통해 다음 숫자와 현재 결과를 연산
      const nextResult = calculator[i](currentResult, nums[count + 1]);
      dfs(count + 1, nextResult);

      // 사용한 연산자를 다시 복구
      operators[i]++;
    }
  }
}

dfs(0, nums[0]);

console.log(max ? max : 0);
console.log(min ? min : 0);