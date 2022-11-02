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

  // await Cart.findOneAndUpdate(
  //   { email: req.body.email },
  //   {
  //     $push: {
  //       cart: product,
  //     }
  //   }
  // );
});
 




router.delete('/deletecart/:id',async (req,res)=>{
  const id=req.params

  Cart.findOneAndDelete({id:id},(err,data)=>{
    if(err){
      console.log(err)
    }else{res.send()}
  })

 
})

module.exports = router;
 