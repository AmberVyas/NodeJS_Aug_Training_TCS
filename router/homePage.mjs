import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/",(req,res)=>{
    fs.readFile("./phonebook.json",(err,data)=>{
        if(err){
            res.status(500).send("Internal server error occured.");
            return false;
        }
        res.setHeader("content-type","application/json");
        res.send(data);
    })
})

router.post("/",(req,res)=>{
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

export default router;