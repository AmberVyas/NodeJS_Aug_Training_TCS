import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import fs from "fs";
const argvs = yargs(hideBin(process.argv)).argv;

const { name, email, number, operation} = argvs;
const filepath = "./phonebook.json";

switch (operation) {
    case "add":
        {
        fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err){
                    throw "file read error occured";
            }
            const content = JSON.parse(data);
            content.push({name, email, number});
            fs.writeFile(filepath,JSON.stringify(content),()=>{
                console.log("New user has been added successfully");
            })
        })
    break;
    }

    case "list":
        {
            fs.readFile(filepath,"utf-8",(err,data)=>{
                if(err){
                        throw "file read error occured";
                }
                const content = JSON.parse(data);
                content.forEach(person => {
                    console.log(`-------------------------------`);
                    console.log(`Name : ${person.name}`);
                    console.log(`Email : ${person.email}`);
                    console.log(`Number : ${person.number}`);
                    console.log(`-------------------------------`);
                });
            })
        }
        
        case "search" :
            {
                fs.readFile(filepath,"utf-8",(err,data)=>{
                    if(err){
                            throw "file read error occured";
                    }
                    const content = JSON.parse(data);
                    content.forEach(person => {
                        if(person.name != name){
                            throw "Person not found";
                        }
                        console.log(`-------------------------------`);
                        console.log(`Name : ${person.name}`);
                        console.log(`Email : ${person.email}`);
                        console.log(`Number : ${person.number}`);
                        console.log(`-------------------------------`);
                    });
                })
            }

    default:
        break;
}

//console.log(name);