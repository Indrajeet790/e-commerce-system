require("dotenv").config();
const express=require("express");
const app=express();
require("./config/dbConnection.js");



// middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(process.env.PORT || 8000,(err)=>{
    if(err){
        console.log("Server is not running",err)
    }else{
        console.log(`server is running on ${process.env.PORT}`)

    }
})