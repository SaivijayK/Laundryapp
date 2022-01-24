const express = require("express")
const User = require("../models/registratioSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const router = express.Router()

router.post("/signup",async(req,res)=>{
    try{
        const {name,email,phone,state,district,address,pincode,password}=req.body
        const hash = await bcrypt.hash(password,10)
        await User.create({
            name,email,phone,state,district,address,pincode,password:hash
        })
        res.json({
            status:"Success",
            message:"successfully signed up"
        })

    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})
module.exports = router