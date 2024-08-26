let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n,m] = input[0].split(" ").map(Number); 
//input[0]에 저장된 첫 번째 줄을 공백으로 나누어 n과 m에 각각 할당합니다.
let arr=[]; 
for (let i =1; i<=n;i++){
  arr.push(i);
}
//arr 배열에는 1부터 n까지의 숫자가 저장됩니다.

let visited = new Array(n).fill(false); // 각 원소 인덱스별 방문 여부
//visited 배열은 각 숫자가 수열에 포함되었는지를 체크. 처음에는 모든 요소가 false로 초기화
let selected =[]; //현재 선택된 숫자의 인덱스를 저장하는 배열

let answer ="";//최종 출력 결과를 저장

function dfs(arr,depth){
  if(depth==m){ //현재 깊이를 나타내며, m과 같아지면 수열이 완성된 것으로 간주
    let result =[];
    for(let i of selected) result.push(arr[i]);
    //selected 배열에 있는 인덱스들을 이용해 result 배열을 만듭니다.
    for(let x of result) answer +=x+" ";
    //answer 문자열에 수열을 추가합니다.
    answer+="\n";
    return;
  }
  for(let i=0;i<arr.length;i++){
    if(visited[i]) continue;// 이미 방문한 원소는 건너뜁니다.
    selected.push(i); 
    // 선택하지 않은 원소의 인덱스를 selected 배열에 추가합니다.
     visited[i] = true; //이미 방문한 숫자는 다시 선택하지 않도록 방문 처리 true
    
    dfs(arr,depth+1);
    visited[i] = false; //현재원소 선택취소
    selected.pop(); // 방문 처리 취소 
  }
}
dfs(arr,0);
console.log(answer);