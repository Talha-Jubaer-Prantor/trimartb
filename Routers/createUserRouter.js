const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../Schema/userSchema");
const User = new mongoose.model("User", userSchema);
const cartSchema = require("../Schema/cartSchema");
const Cart = new mongoose.model("Cart", cartSchema);

router.post("/user", (req, res) => {
  const { name, email, phone, password } = req.body;
  // Creating new user
  const newUser = new User({
    name: name,
    email: email,
    phone: phone,
    password: password,
  });
  newUser.save().then(res.send(newUser));

  // Creating cart as an user opens an account
  const newCart = new Cart({
    email: req.body.email,
    cart: [],
  });
  newCart.save().then();
});

module.exports = router;
