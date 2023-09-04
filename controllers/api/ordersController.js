const Order = require('../../models/orderModel')


module.exports = {
    getOrdersForUser,
    createOrder
}

async function getOrdersForUser(req,res){
    try {
        const  id  = req.query.id;
        console.log('Order fetch User Id::',id)
        const orders = await Order.find({user_id : id}).sort({createdAt: -1});
        console.log(orders);
        res.status(200).json(orders);
    }catch (err){
        res.status(400).json({err});
    }
}

async function createOrder(req, res) {     
    try {
      // Add the order to the db
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json({error :err.message});
    }
  }