var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
  // _name: {type: Schema.Types.ObjectId, ref:'Customer'} ,
  name: {},
  product: {},
  quantity: Number,
  createdAt: { type: Date, default: Date.now }
});

mongoose.model('Order', OrderSchema); // The product is the name of the collection that is found in the database.