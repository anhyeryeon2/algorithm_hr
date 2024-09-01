
let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

const MAX =100001;
let [n,k] = input[0].split(' ').map(Number);
let visited = new Array(MAX).fill(0);

function bfs(){
  let queue = [];  // BFS를 위한 큐
  queue.push(n);  // 수빈이의 시작 위치를 큐에 추가
  
  while (queue.length !== 0) {
    let cur = queue.shift();  // 큐에서 현재 위치를 꺼냄
    
    if(cur ==k){
      return visited[cur];
    }
    for(let nxt of [cur-1,cur+1,cur*2]){
      if(nxt <0 ||nxt >=MAX) continue;
      if(visited[nxt]==0){
        visited[nxt] = visited[cur]+1;
        queue.push(nxt);
      }
    }
  }
}
console.log(bfs());