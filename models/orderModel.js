const mongoose =  require('mongoose')
const Schema   = mongoose.Schema

const orderSchema = new Schema({
   user_id : {
    type: String,
    required: true
   },
   order_total: {
    type: Number,
    required: true
   },
   items: {
    type : [String],
    required: true
   }
}, { timestamps : true})


module.exports = mongoose.model('Order', orderSchema)