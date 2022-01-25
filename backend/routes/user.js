const express = require("express")
const User = require("../models/registration&loginSchema")
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
router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body
        const user = await User.findOne({email})
        if(!user){
            res.json({
                status:"failed",
                message:"please enter valid email or password"
            })
        }
        const password_match = await bcrypt.compare(password,user.password);
        if (!password_match){
            return res.json({
                status:"failed",
                message:"password incorrect"
            })
        }
        const token = jwt.sign({
            data:user._id
        },"secretkey")
        res.json({
            status:"success",
            message:token
        })


    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})
module.exports = router