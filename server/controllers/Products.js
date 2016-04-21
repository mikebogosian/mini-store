var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
 return {
  find: function(req, res) {
     Product.find({}, function(err, results) {
      // console.log(results)
       if(err) {
         console.log(err);
       } else {
        // console.log(results);
         res.json(results);
       }
   })
  }
  


  
 }
})();