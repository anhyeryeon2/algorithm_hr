const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 처리
const n = parseInt(input[0]);
const map = input.slice(1).map(line => line.split(' ').map(Number));

// 이동 방향 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// DFS 함수 정의 (재귀 사용)
function dfs(x, y, visited, height) {
    visited[x][y] = true;

    for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];

        if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] && map[nx][ny] > height) {
            dfs(nx, ny, visited, height);
        }
    }
}


// DFS 함수 정의 - 스택사용
// function dfs(x, y, visited, height) {
//     const stack = [[x, y]];
//     visited[x][y] = true;

//     while (stack.length) {
//         const [cx, cy] = stack.pop();

//         for (let d = 0; d < 4; d++) {
//             const nx = cx + dx[d];
//             const ny = cy + dy[d];

//             if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] && map[nx][ny] > height) {
//                 visited[nx][ny] = true;
//                 stack.push([nx, ny]);
//             }
//         }
//     }
// }

// // 최대 안전 영역 개수 계산
let maxSafeZones = 0;

for (let height = 0; height <= 100; height++) {
    const visited = Array.from(Array(n), () => Array(n).fill(false));
    let safeZoneCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (map[i][j] > height && !visited[i][j]) {
                dfs(i, j, visited, height);
                safeZoneCount++;
            }
        }
    }

    maxSafeZones = Math.max(maxSafeZones, safeZoneCount);
}

console.log(maxSafeZones);
