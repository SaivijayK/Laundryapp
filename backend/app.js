const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb+srv://saivijay57:vijay123@cluster0.8teab.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit"
// const bodyParser = require("boby-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express()
// app.use(bodyParser())
app.use(express.json())
mongoose.connect(url).then(()=>{
    console.log("connected to data base successful")
}).catch((e)=>{
    console.log("connection to data base unsuccessful")
})
const User = require("./routes/user")
app.use("/",User)
app.listen(5000,()=>{
    console.log("server created successful")
})