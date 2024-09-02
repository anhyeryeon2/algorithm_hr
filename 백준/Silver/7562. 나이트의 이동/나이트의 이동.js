let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
    let l = Number(input[line]);
    let [x, y] = input[line + 1].split(' ').map(Number);
    let [targetX, targetY] = input[line + 2].split(' ').map(Number);
    let visited = Array.from({ length: l }, () => new Array(l).fill(0));
    
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;

    while (queue.length) {
        let [curX, curY] = queue.shift();
        
        if (curX === targetX && curY === targetY) {
            console.log(visited[curX][curY] - 1);
            break;
        }

        for (let i = 0; i < 8; i++) {
            let nx = curX + dx[i];
            let ny = curY + dy[i];

            if (nx >= 0 && nx < l && ny >= 0 && ny < l && visited[nx][ny] === 0) {
                visited[nx][ny] = visited[curX][curY] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    line += 3;
}
