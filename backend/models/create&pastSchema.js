const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    date:{
        type:String,
    },
    productlist:[{
        producttype:{type:String},
        quantity:{type:Number,default:0},
        wash:{type:String,default:"wash"},
        press:{type:String,default:"press"},
        fold:{type:String},
        pack:{type:String},
        price:{type:Number,default:0}
    }],
    totalprice:{
        type:Number
    },
    totalitems:{
        type:Number
    },
    Storelocation:{
        type:String,
        default:"Gachibowli"
    },
    city:{
        type:String,
        default:"Hyderabad"
    },
    storephone:{
        type:Number,
        default:"9878685841"
    },
    status:{
        type:String,
        default:"Ready to pickup"
    },
})


const Product = mongoose.model("Product",productSchema)
module.exports = Product