const express = require('express');
const orderRouter = express.Router();
const {
    getOrdersForUser,
    createOrder
} = require('../../controllers/api/ordersController')

// Create a order
orderRouter.post('/',createOrder)
// Get all orders
orderRouter.get('/all', getOrdersForUser)



module.exports  = orderRouter;