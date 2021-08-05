const fs = require("fs");
let  text = fs.readFileSync("text.txt" , "utf-8");
text = text.replace("world" , "kingdom");
console.log("The content of the file is");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("saksham.txt" , text);