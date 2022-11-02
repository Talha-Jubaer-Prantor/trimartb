const mongoose = require("mongoose");

const adminPostSchema = mongoose.Schema({
  name:{type:String},
  price:{type:String},
  img:{type:String},
  category:{type:String},
  description:{type:String}
});

module.exports = adminPostSchema;
