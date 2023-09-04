const mongoose =  require('mongoose')
const Schema   = mongoose.Schema


const policySchema = new Schema({
    name :{
        type : String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    term : {
        type: String,
        required : true
    },
    type : {
        type : String,
        required : true
    }
}, { timestamps : true})


module.exports = mongoose.model('Policy', policySchema)