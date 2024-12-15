const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const A = input[1].split(" ").map(Number);
const Marr = input[3].split(" ").map(Number);

A.sort((a,b)=>a-b); 

function binarySearch(arr,target){
  let start =0;
  let end = arr.length -1;

  while(start <=end){
    const mid = Math.floor((start+end)/2);
    if(arr[mid] ===target){
      return true;
    }else if(arr[mid]<target){
      start= mid+1;
    }else{
      end= mid-1;
    }
  }
  return false;
}

const result =[];
for(let i=0;i<Marr.length;i++){
  const M = Marr[i];
  if(binarySearch(A,M)){
    result.push(1);
  }else{
    result.push(0);
  }
}

console.log(result.join('\n'));