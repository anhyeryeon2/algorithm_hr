let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCaseCount = parseInt(input[0]); // 테스트 케이스의 수 읽기
let index = 1; // 현재 입력 데이터 위치

for (let t = 0; t < testCaseCount; t++) {
    // 각 테스트 케이스에 대해 반복
    let [width, height, cabbageCount] = input[index].split(' ').map(Number);
    index++; // 다음 줄로 이동

    // 배추밭을 0으로 초기화 (배추가 없는 상태)
    let field = Array(height).fill().map(() => Array(width).fill(0));
    let visited = Array(height).fill().map(() => Array(width).fill(false));

    // 배추 위치 설정
    for (let i = 0; i < cabbageCount; i++) {
        let [x, y] = input[index].split(' ').map(Number);
        field[y][x] = 1; // 배추 심기
        index++; // 다음 배추 위치로
    }

    // DFS 함수 정의: 연결된 배추들을 모두 방문
    function dfs(x, y) {
        // 현재 위치를 방문 처리
        visited[y][x] = true;

        // 상하좌우 네 방향 검사
        let dx = [0, 0, -1, 1];
        let dy = [-1, 1, 0, 0];
      
        for (let d = 0; d < 4; d++) {
            let nx = x + dx[d];
            let ny = y + dy[d];
            // 범위 검사 및 방문 여부, 배추 존재 여부 검사
            if (nx >= 0 && nx < width && ny >= 0 && ny < height && field[ny][nx] === 1 && !visited[ny][nx]) {
                dfs(nx, ny); // 연결된 배추로 계속 탐색
            }
        }
    }

    let wormsNeeded = 0; // 필요한 지렁이 수
    // 모든 위치를 검사하며 지렁이 필요 여부 판단
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (field[y][x] === 1 && !visited[y][x]) {
                // 배추가 있고 아직 방문하지 않은 경우
                dfs(x, y); // 연결된 모든 배추 방문
                wormsNeeded++; // 새 지렁이 필요
            }
        }
    }

    console.log(wormsNeeded); // 지렁이 수 출력
}
