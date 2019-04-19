const products = require('../controllers/products');

module.exports = function(app){
    app.get('/', function (req, res) {
       products.index(req,res);
    });
    app.get('/allproducts', function (req, res) {
        products.getAll(req,res);
    });
    app.post('/newproduct', function (req, res) {
        products.create(req,res);
    });
    app.put('/product/update/:id', function (req, res) {
        products.update(req,res);
    });
    app.get('/product/:id', function (req, res) {
        console.log("routes",req.params.id);

        products.find(req,res);
    });
    app.delete('/delete/:id', function (req, res) {
        products.destroy(req,res);
    });
}