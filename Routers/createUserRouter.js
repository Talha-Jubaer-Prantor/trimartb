const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../Schema/userSchema");
const User = new mongoose.model("User", userSchema);

router.post("/user", (req, res) => {
  const { name, email, phone, password, address } = req.body;

  User.find({ email: email }, (err, data) => {
    if (data.length < 1) {
      const user = false;
      console.log(user);
      const newUser = new User({
        name: name,
        email: email,
        phone: phone,
        password: password,
        address: address,
      });
      newUser.save().then(res.send(user));
    } else {
      const user = true;
      res.send(user);
    }
  });
});

module.exports = router;
