import fs, { readFile } from "fs";
import {promisify} from "util";

const promisedReadFile = promisify(fs.readFile);
const promisedWriteFile = promisify(fs.writeFile);

function customeReadFile(name, encoding){
    return new Promise ((reject, resolve)=>{
        readFile(name, encoding,(err, data)=>{
            if(err){
                return reject(err);
            }
            resolve(data);
        })
    })
}

async function main(){
    try {
        const content = await customeReadFile("./phonebook.json","utf-8")
        await promisedWriteFile("./phonebook-promise.json",content)
        const contentcopy = await customeReadFile("./phonebook-promise.json","utf-8")
        console.log(contentcopy);
    } catch (error) {
        console.log(error);
    }  
}

main();
// promisedReadFile("./phonebook.json","utf-8")
// .then((content)=>{
//     return promisedWriteFile("./phonebook-promise.json",content).catch(()=>{})
// })
// .then(()=>{
//     return promisedReadFile("./phonebook-promise.json","utf-8").catch(()=>{})
// })
// .then((contentcopy)=>{
//     console.log(contentcopy)})
// .catch((err)=>{
//     console.log(err);
// })


// fs.readFile("./phonebook.json","utf-8",(err,content)=>{
//     if(err) throw "error occured";
//     fs.writeFile("./phonebook-callback.json",content,()=>{
//         fs.readFile("./phonebook-callback.json","utf-8",(errcopy,contentcopy)=>{
//         if(errcopy) throw "error occured";
//         console.log(contentcopy);
//     })
// })

// });