let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);  // 테스트 케이스의 개수
let line = 1;  // 입력 라인을 추적하는 변수
for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]);  // 각 테스트 케이스의 지원자 수
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);  // 각 지원자의 서류심사 및 면접 순위
    arr.push(data);
  }
  
  // 서류심사 순위 기준으로 오름차순 정렬
  arr.sort((x, y) => x[0] - y[0]);
  
  let count = 0;  // 선발된 신입사원 수
  let minValue = 100001;  // 면접 순위의 최소값을 초기화
  for (let [x, y] of arr) {
    if (y < minValue) {
      count++;  // 면접 순위가 현재 최소값보다 작다면 선발 가능
      minValue = y;  // 새로운 최소값 갱신
    }
  }
  
  console.log(count);  // 결과 출력
  line += n + 1;  // 다음 테스트 케이스로 넘어가기 위해 라인 이동
}
