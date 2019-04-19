const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema({
    title: {type: String, required:[true, "title is required"], minLength:2},
    price: {type: Number, required:[true, "title is required"]},
    image:{type: String, required:true}
},{timestamps: true})

mongoose.model('Product', ProductSchema);

module.exports = {
    Product: mongoose.model('Product')};


