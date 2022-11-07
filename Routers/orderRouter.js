const { json } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const orderSchema = require("../Schema/orderSchema");
const Order = new mongoose.model("Order", orderSchema);
const cartSchema = require("../Schema/cartSchema");
const Cart = mongoose.model("Cart", cartSchema);

// This will create order
router.post("/order", async (req, res) => {
  console.log(req.body);
  const newOrder = new Order({
    userId: req.body.userId,
    orderOwner: req.body.user,
    status: false,
    order: req.body.orders,
  });
  await newOrder.save();

  Cart.deleteMany({ email: req.body.user.email }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send();
    }
  });
});

// This will show cart items
router.get("/mycart/:id", (req, res) => {
  const id = req.params.id;
  Cart.find({ email: id }, (err, data) => {
    res.send(data);
  });
});

router.get("/myorder/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  Order.find({ userId: id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

router.post("/deleteorder", (req, res) => {
  const orderId = req.body;
  console.log(orderId.orderId);
  Order.findOneAndDelete({ _id: orderId.orderId }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

// this will fetch data for admin home
router.get("/order", (req, res) => {
  Order.find({ status: false }, (err, data) => {
    res.send(data);
  });
});

// Admin will confirm orders from below button
router.post("/confirmorder", async (req, res) => {
  const orderId = req.body;
  console.log(orderId.orderId);
  await Order.findOneAndUpdate(
    { _id: orderId.orderId },
    {
      $set: { status: true },
    }
  ).then(res.send(true));
});

// This will get data of confirmed orders for frontend
router.get("/confirmedorder", (req, res) => {
  Order.find({ status: true }, (err, data) => {
    res.send(data);
  });
});

router.delete("/deleteconfirmorder/:id", (req, res) => {
  console.log(req.params.id);
  Order.findOneAndDelete({ _id: req.params.id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send();
    }
  });
});

module.exports = router;
