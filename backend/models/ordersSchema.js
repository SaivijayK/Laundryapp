const mongoose = require("mongoose")
const OrderSchema = new mongoose.Schema({
    date:{
        type:Date,
    },
    Storelocation:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    storephone:{
        type:Number,
        default:""
    },
    totalitems:{
        type:Number
    },
    totalprice:{
        type:Number
    },
    status:{
        type:String
    }
})


const Order = mongoose.model("Order",OrderSchema)
module.exports = Order