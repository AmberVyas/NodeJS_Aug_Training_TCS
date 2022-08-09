import express from "express";

const app  = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("Hello from root");
})

app.get("/products",(req,res)=>{
    res.send("Hello from products");
})

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})