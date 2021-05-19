var express = require('express');
var router = express.Router();
var ProductHandler = require('../controllers/products.controllers');

router.post('/addproduct', async (req, res, next) => {
    let AddProducts = await ProductHandler.Addproducts(req.body);

    if (!AddProducts.status) return res.status(400).json(AddProducts);

    res.status(200).json(AddProducts)
});




       module.exports = router;