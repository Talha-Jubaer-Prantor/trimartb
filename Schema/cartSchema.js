const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  email: { type: String },
  cart: { type: Array },
});

module.exports = cartSchema;
