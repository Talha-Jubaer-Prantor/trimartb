const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const createUserRouter = require("./Routers/createUserRouter");
const loginRouter = require("./Routers/loginRouter");
const orderRouter = require("./Routers/orderRouter");
const cartRouter = require("./Routers/cartRouter");
const adminPostRouter = require("./Routers/adminPostRouter")

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/",(req,res)=>{
  res.send("Success")
})

app.post("/user", createUserRouter);
app.post("/cart", cartRouter);
app.post("/signin", loginRouter);
app.post("/order", orderRouter);
app.delete("/deletecart/:id",cartRouter)
app.delete("/deleteconfirmorder/:id",orderRouter)
app.post("/confirmorder",orderRouter)
app.post("/adminpost",adminPostRouter)
app.get("/myorder/:id", orderRouter);
app.get("/mycart/:id", orderRouter);
app.get("/order",orderRouter)
app.get("/confirmedorder",orderRouter)
app.post("/deleteorder",orderRouter)
app.get("/product",adminPostRouter)

mongoose.connect(
    "mongodb+srv://cluster0:cluster0@cluster0.hacpu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(console.log("Database connection successful"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`We are online on port ${PORT}`);
});
