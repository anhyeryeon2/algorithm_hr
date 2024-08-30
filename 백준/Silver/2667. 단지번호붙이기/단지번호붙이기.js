const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 지도 크기 N
const n = parseInt(input[0]);

// 지도 정보 입력받기 (2차원 배열로 변환)
const map = input.slice(1, n + 1).map(line => line.split('').map(Number));

// 방문 여부를 기록하는 배열
const visited = Array.from(Array(n), () => Array(n).fill(false));

// 방향 벡터 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 단지 내 집의 수를 기록할 배열
const houseCounts = [];

function dfs(x, y) {
    // 방문 처리
    visited[x][y] = true;
    let count = 1; // 현재 집 포함

    // 4방향으로 이동하며 탐색
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 지도 범위를 벗어나지 않고, 방문하지 않았으며 집(1)이 있는 경우
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && map[nx][ny] === 1 && !visited[nx][ny]) {
            count += dfs(nx, ny); // 재귀 호출로 연결된 모든 집을 탐색
        }
    }

    return count; // 단지 내 집의 수 반환
}

// 모든 지점을 탐색하며 단지 찾기
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // 집이 있고, 아직 방문하지 않은 경우 새로운 단지 발견
        if (map[i][j] === 1 && !visited[i][j]) {
            const houseCount = dfs(i, j);
            houseCounts.push(houseCount);
        }
    }
}

// 단지 수 출력
console.log(houseCounts.length);

// 각 단지 내 집의 수를 오름차순으로 정렬하여 출력
houseCounts.sort((a, b) => a - b);
houseCounts.forEach(count => console.log(count));
