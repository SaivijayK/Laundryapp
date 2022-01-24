const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    productlist:[{
        producttype:{type:String},
        wash:{type:String,default:"wash"},
        press:{type:String,default:"press"},
        fold:{type:String},
        pack:{type:String}
    }],
    quantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        default:0
    }
})


const Product = mongoose.model("Product",productSchema)
module.exports = Product