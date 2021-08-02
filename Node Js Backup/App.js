const express = require('express');
const dotenv = require('dotenv')
const app = express()
dotenv.config({path:'./config/config.env'})
app.get('/', (req,res)=>{
    res.send("Root Request")
})

app.listen(process.env.PORT,(err)=>{
    console.log(process.env.PORT)
    if(err) throw err
    console.log(`Servr Running on port Number: ${5000}`)
})

/*
    How to read Application configuration env variables;
    1.install dotenv 
    npm i dotenv 
    2.import dotenv 
    3.provide your configuration path.
    dotenv.config({path:''})
*/