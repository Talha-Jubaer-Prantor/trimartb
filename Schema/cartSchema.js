const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  email: { type: String },
  item:{type:Object}
});

module.exports = cartSchema;
