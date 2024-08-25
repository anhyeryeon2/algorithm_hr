let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let n = Number(input);

let queens = []; //현재 체스판에 놓인 퀸의 위치정보

function possible(x, y) {
  //위치에 퀸을 놓을 수 있는지 확인
  for (let [a, b] of queens) {
    //현재까지 놓았던 모든퀸의 위치를 하나씩 확인
    if (a == x || b == y)
      //행이나 열이 같다면 놓을 수 없음
      return false;
    if (Math.abs(a - x) == Math.abs(b - y))
      //대각선에 위치하면 놓을수 없음
      return false;
  }
  return true;
}

let cnt = 0;

function dfs(row) {
  if (row == n) {
    cnt++; //퀸을 n개 배치할 수 있는 경우 카운트 증가
  }
  for (let i = 0; i < n; i++) {
    //현재 row행에 존재하는 열을 하나씩 확인
    if (!possible(row, i))
      // 현재 위치에 놓을 수 없다면 무시,다음열로 넘어감
      continue;
    queens.push([row, i]); //현재위치에 퀸을 놓기
    dfs(row + 1); //다음 행으로 넘어가 다시  재귀함수 호출
    queens.pop(); //장 최근에 추가된 퀸의 위치를 제거하여 다른 가능한 배치를 탐색
  }
}
dfs(0); //첫 번째 행에서부터 탐색을 시작
console.log(cnt);