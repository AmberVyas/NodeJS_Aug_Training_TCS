import fs from "fs";
import path from "path";

const filePath = "./content/message.txt";

console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.isAbsolute(filePath));
console.log(path.basename(filePath));

fs.readFile("./content/message.txt",(err,data) => {
    if(err){
        console.log(err);
        console.log("error occurs while reading the file.");
        return false;
    }
    console.log(data.toString());
});