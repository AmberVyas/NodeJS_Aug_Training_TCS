import express from "express";
import homePageRouter from "./router/homePage.mjs";
import usersRouter from "./router/users.mjs";
import productsRouter from "./router/products.mjs";

const app  = express();

app.use(express.json());
const port = process.env.port || 3000;

app.use("/",homePageRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})