const express = require("express")
const order = require("../models/ordersSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const app = express()
// const router = express.Router()

app.post("/orders",async(req,res)=>{
    try{
        
        const {date,Storelocation,city,storephone,totalitems,totalprice,status}=req.body
        await order.create({
            date,Storelocation,city,storephone,totalitems,totalprice,status
        })
            res.json({
                status:"Success",
                message:"successfully ordered"
            })
        
        }catch(e){
            res.json({
                status:"failed",
                message:e.message
            })
        }

})
app.get("./orders",async(req,res)=>{
try{

    const result= await order.find({})
    res.json({
        status:"success",
        message:result
    })

}
catch(e){
    res.json({
        status:"failed",
        message:e.message
    })
}
})
module.exports = order