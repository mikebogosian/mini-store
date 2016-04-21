var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var CustomerSchema = new mongoose.Schema({
  // orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
  name: String,
  createdAt: { type: Date, default: Date.now }
});

mongoose.model('Customer', CustomerSchema);