const Product = require('../models/product').Product;

module.exports={
    getAll:function(req,res){
        Product.find({}, function (err, products) {
            if(err){
                res.json({errorMsg:"Could not be found", data:products})
            } else {

                res.json({message:"Found", data:products})
            }
        })
    },
    create: function (req, res) {
        console.log("POST DATA", req.body);
        var newProduct = new Product({title : req.body.title, price : req.body.price, image : req.body.image});
        newProduct.save(function (err) {
            if(err){
                res.json({errorMsg:"Could not be found", data:newProduct})
            } else {

                res.json({message:"Found", data:newProduct})
            }
        })
    },
    update: function (req,res){
        console.log("Update DATA", req.body);
        Product.findByIdAndUpdate(req.params.id,req.body, function(err,products){
            console.log("products to edit",products);
            if(err){
                res.json({errorMsg:"Could not be found", data:products})
            } else {

                res.json({message:"Found", data:products})
            }
        })

    },
    find: function(req,res) {
        console.log("**********", req.params.id);

        Product.findOne({_id: req.params.id}, function (err, products) {
            console.log("one product", products);
            if (err) {
                res.json({errorMsg: "Could not be found", data: products})
            } else {

                res.json({message: "Found", data: products})
            }


        })
    },

    destroy: function (req, res) {
        Product.remove({_id: req.params.id}, function (err, products) {
            console.log("one product", products);
            if (err) {
                res.json({errorMsg: "Could not be found", data: products})
            } else {

                res.json({message: "Found", data: products})
            }


        })
    },

}