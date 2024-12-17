const fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = "";
let noTag = "";
let inTag = false;

for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === "<") {
        result += noTag.split("").reverse().join("");
        noTag = "";
        inTag = true;
        result += char; //"<"
    } else if (char === ">") {
        inTag = false;
        result += char;
    } else if (inTag) {
        result += char;
    } else if (char === " ") {
        result += noTag.split("").reverse().join("") + " ";
        noTag = "";
    } else {
        noTag += char;
    }
}

result += noTag.split("").reverse().join("");
console.log(result);
