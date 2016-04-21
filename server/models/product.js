var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  productName: String,
  URL: String,
  quant: Number,
  description: String

});

mongoose.model('Product', ProductSchema);