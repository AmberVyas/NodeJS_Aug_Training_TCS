import express from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello from products");
})

router.get("/laptop",(req,res)=>{
    res.send("This page is for Laptops.");
})

export default router;