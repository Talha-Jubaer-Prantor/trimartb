const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const adminPostSchema =require("../Schema/adminPostSchema")
const AdminPost=new mongoose.model("AdminPost",adminPostSchema)

router.post("/adminpost",(req,res)=>{
    const newPost=new AdminPost({
        name:req.body.name,
        price:req.body.price,
        img:req.body.img
    });
    newPost.save()
})

router.get("/product", (req,res)=>{
     AdminPost.find({},(err,data)=>{
        res.send(data)
    }).clone()
})


module.exports = router
