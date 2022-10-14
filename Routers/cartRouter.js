const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cartSchema = require("../Schema/cartSchema");
const Cart = mongoose.model("Cart", cartSchema);

router.post("/cart", async (req, res) => {
  const product = req.body.selectedProduct;
  await Cart.findOneAndUpdate(
    { email: req.body.email },
    {
      $push: {
        cart: product,
      }
    }
  );
});
 


router.post('/deletecart/:id',async (req,res)=>{
  const id=req.params.id
console.log(id)
  await Cart.findOneAndUpdate({email:id},
    {
    $pull:{cart: req.body}
  }).then(res.send())

})

module.exports = router;
 