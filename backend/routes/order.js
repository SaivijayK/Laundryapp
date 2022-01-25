const express = require("express")
const Product = require("../models/create&pastSchema")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dayjs = require("dayjs")
const app = express()
app.use(bodyParser())
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")
const router = express.Router()


router.get("/orders",async (req,res)=>{
    try{
        const existingorders = await Product.find({user:req.user}).sort({_id:-1})
        res.json({
            status:"success",
            message:existingorders
        })

    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
})
router.post("/orders",async(req,res)=>{
    try{
        const {totalitems,totalprice,productlist,status}=req.body
        const createorder = await Product.create({
            totalitems,
            totalprice,
            date:dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'),
            productlist,
            user:req.user
        })
        res.json({
            status:"success",
            message:createorder
        })

    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})
module.exports = router