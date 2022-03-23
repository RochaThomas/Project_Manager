const Product = require('../models/product.model');

//get all of the products in the db
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            console.log('Getting all the products from db');
            return res.json({ products: allProducts});
        })
        .catch(err => res.json({message: 'Something went wrong', error: err}));
};

//get one of the products from the db using id
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then(oneProduct => {
            console.log('Getting one product from db');
            return res.json({product: oneProduct});
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

//creating a new product in the db
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then( newProduct => {
            console.log('Creating new product in db');
            return res.json({product: newProduct});
        })
        .catch( err => res.json({ message: 'Something went wrong', error: err}));
}

//update an existing product in the db, using id
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            console.log('Updating a product in the database');
            return res.json({product: updatedProduct});
        })
        .catch(err => res.json({message: 'Something went wrong', error: err}));
};

//delete a product from the db, using id
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id})
        .then(result => {
            console.log('Deleting a product from the database');
            return res.json({result: result});
        })
        .catch(err => res.json({message: 'Something went wrong', error: err}));
};