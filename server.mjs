import express from "express";
import fs from "fs";

const app  = express();

app.use(express.json());
const port = process.env.port || 3000;

app.get("/",(req,res)=>{
    fs.readFile("./phonebook.json",(err,data)=>{
        if(err){
            res.status(500).send("Internal server error occured.");
            return false;
        }
        res.setHeader("content-type","application/json");
        res.send(data);
    })
})

app.post("/",(req,res)=>{
    fs.readFile("./phonebook.json",(err,data)=>{
        if(err){
            res.status(500).send("Internal server error occured.");
            return false;
        }
        const content = JSON.parse(data);
        content.push(req.body);
        fs.writeFile("./phonebook.json",JSON.stringify(content),()=>{
            res.send(content);
        })
    })
})
app.get("/products",(req,res)=>{
    res.send("Hello from products");
})

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})