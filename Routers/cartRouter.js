const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cartSchema = require("../Schema/cartSchema");
const Cart = mongoose.model("Cart", cartSchema);

router.post("/cart", async (req, res) => {
  const product = req.body.product;
  console.log(product)
  const newCart=new Cart({
    email:req.body.email,
    item:product
  })
  newCart.save()

});
 




router.delete('/deletecart/:id',async (req,res)=>{
  const id=req.params.id
console.log(id)
  Cart.findOneAndDelete({_id:id},(err,data)=>{
    if(err){
      res.send(err)
    }else{res.send()}
  })

 
})

module.exports = router;
 