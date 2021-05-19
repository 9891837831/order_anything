var express = require('express');
var router = express.Router();
var OrderHandler = require('../controllers/order.controller');
//add to cart then place order
router.post('/placeorder', async (req, res, next) => {
    let CreateOrder= await OrderHandler.CreateOrder(req.body);

    if (!CreateOrder.status) return res.status(400).json(CreateOrder);

    res.status(200).json(CreateOrder)
});

//view all orders
router.get('/view-order', async (req, res, next) => {
    let ViewOrder= await OrderHandler.ViewOrders();

    if (!ViewOrder.status) return res.status(400).json(ViewOrder);

    res.status(200).json(ViewOrder)
});
//assign order
router.post('/assign', async (req, res, next) => {
    let AssignOrder= await OrderHandler.AssignOrder(req.body);

    if (!AssignOrder.status) return res.status(400).json(AssignOrder);

    res.status(200).json(AssignOrder)
});
router.post('/update-status', async (req, res, next) => {
    let OrderStatus= await OrderHandler.UpdateOrderStatus(req.body);

    if (!OrderStatus.status) return res.status(400).json(OrderStatus);

    res.status(200).json(OrderStatus)
});


       module.exports = router;