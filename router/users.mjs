import express from "express";
import axios from "axios"
//import https from "https";
const router = express.Router();

router.get("/",async (req,res)=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        //res.json(response.data)
        res.render("users",{users :response.data });

    } catch (error) {
        res.status(500).send("internal server error");
    }
    

})

// router.get("/",(req,res)=>{
//     https.get({
//         hostname : "jsonplaceholder.typicode.com",
//         path : "/users",
//         protocol : "https:"
//         },(response)=>{
//             let data = "";
//             response.on("data",(chunk)=>{
//                 data = data + chunk;
//             })
//             response.on("close",()=>{
//                 res.json(data);
//             })
//         }
//         )
// })

export default router;
