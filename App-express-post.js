//ES 5 - notation 
const express = require('express')
const app = express();

/*
API URL : localhost:5000/
Method: POST
Fields: Email, password
Access Type: Public
*/
//app.post("/signup", ()=>{})
app.post("/", (req,res)=>{
    //business logic to insert data
    res.send("User Register Successfully")
})
/*
API URL : localhost:5000/
Method: GET
Fields: Email, password
Access Type: Public
*/
app.get("/", (req,res)=>{
    res.send(`<h1>Hello, Root Requiest<h2>`)
})
app.listen(5000,(err)=>{
    if(err) throw err
    console.log("Server Running on Port Number")
})

//es 6 
/* import express from 'express';
const app = express();
 */