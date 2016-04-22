var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
 return {
  find: function(req, res) {
     Order.find({}, function(err, results) {
      // console.log(results)
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  createOrder: function(req, res) {
    console.log(req.body, "This is coming from my database this is good.")

    Product.findOne({productName: req.body.product.productName}, function(err, product){
      if(err){
        console.log(err);
      }
      else{

        if(product.quant - req.body.quantity < 0){
          res.json({errors: "Sorry, we only have "+product.quant+" in stock"});
          
        }
        else{

        console.log(product, "after findOne this is returned")
        // console.log(product.productName, "test")
        Product.update({productName: product.productName}, {$inc: {quant: - req.body.quantity}}, function(err, results){
              console.log(results, "This is after the UPDATE")
              if(err){
                console.log(err, "this is an error");

              } else{
                  console.log(results);
                  Order.create(req.body, function(err, order) {
              // console.log(order, "This is coming from my database")
                  if(err) {
                  console.log(err);
                  res.json({errors: err.errors});
                  } else{
                  res.json(true);
                  }
                })
              }
              })
            }
          }
    })

  }
  //    Order.create(req.body, function(err, order) {
  //     // console.log(order, "This is coming from my database")
  //      if(err) {
  //        console.log(err);
  //        res.json({errors: err.errors});
  //      } else {
        
  //        res.json(true);
  //      }
  //  })
  // }

  // buyProduct: function(req, res) {
  //   console.log(req.body.id, "This is coming from Controller");
  //    Product.update({_id: req.body.id},{$inc: {quant: -1}}, function(err, results) {
  //     // console.log(results)
  //      if(err) {
  //        console.log(err);
  //      } else {
  //       // console.log(results);
  //        res.json(results);
  //      }
  //  })
  // }


  
}
})();