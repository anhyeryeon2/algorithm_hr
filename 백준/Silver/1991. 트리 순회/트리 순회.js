const fs = require("fs");

// 파일 입력 처리
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 노드의 개수
const tree = {};

// 트리 생성
for (let i = 1; i <= N; i++) {
    const [node, left, right] = input[i].split(" ");
    tree[node] = { left, right };
}

// 순회 결과 저장
let preorderResult = "";  // 전위 순회
let inorderResult = "";   // 중위 순회
let postorderResult = ""; // 후위 순회

// 전위: 루트 -> 왼 -> 오
const preorder = (node) => {
    if (node === ".") return;
    preorderResult += node;
    preorder(tree[node].left);
    preorder(tree[node].right);
};

// 중위: 왼 -> 루트 -> 오
const inorder = (node) => {
    if (node === ".") return;
    inorder(tree[node].left);
    inorderResult += node;
    inorder(tree[node].right);
};

// 후위: 왼 -> 오 -> 루트
const postorder = (node) => {
    if (node === ".") return;
    postorder(tree[node].left);
    postorder(tree[node].right);
    postorderResult += node;
};

// 순회 실행 (루트는 항상 'A'로 시작)
preorder("A");
inorder("A");
postorder("A");

// 결과 출력
console.log(preorderResult);
console.log(inorderResult);
console.log(postorderResult);
