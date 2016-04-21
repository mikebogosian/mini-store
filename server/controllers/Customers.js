var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
 return {
  find: function(req, res) {
     Customer.find({}, function(err, results) {
      // console.log(results)
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },

  create: function(req,res){
  	Customer.create(req.body, function(err, Customer){
  		if(err){
  			console.log(err);
  			res.json({errors: err.errors});

  		}
  		
  		else res.json(true);

  	})
  },

  remove: function(req,res){
    Customer.remove({_id: req.body}, function(err, Customer){
        res.json(Customer)
      })

    }
 


  
 }
})();