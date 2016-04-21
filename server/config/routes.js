var customers = require('./../controllers/customers.js');
var order = require('./../controllers/orders.js')
var product = require('./../controllers/products.js')

module.exports = function(app){

	app.get('/customers', function(req, res){
		customers.find(req,res);
	});

	app.post('/customers', function(req,res){

		customers.create(req,res);

	})

	app.post('/remove', function(req,res){


		customers.remove(req,res);

	})

	app.get('/products', function(req,res){

		product.find(req,res);
	})

	app.post('/addProduct', function(req,res){

		product.createProduct(req,res);
	})

	app.post('/orders', function(req,res){
		// console.log(req.body, "this is from routes");
		// console.log(res,"this is an error message")
		order.createOrder(req,res);
	
	})

	app.get('/orders', function(req,res){

		order.find(req,res);
	})

};