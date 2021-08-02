var express = require('express');
var app = express()
//we are initilizing expess app 
// Basic Routing
/*
API URL: localhost:5000/
Method: GET
Fields:No Required
Access Type:Public
*/
app.get("/", (req,res)=>{ 
  
    res.send("Root Request")
})
/*
API URL: localhost:5000/user
Method: GET
Fields:No Required
Access Type:Public
*/
app.get("/user", (req,res)=>{
    res.send(`<h1>User Data</h1>`)
});
/*
API URL: localhost:5000/employee
Method: GET
Fields:No Required
Access Type:Public
*/
app.get("/employee", (req,res)=>{
    res.send("Employee Data")
});
/*
API URL: localhost:5000/employee/details
Method: GET
Fields:No Required
Access Type:Public
*/
app.get("/employee/details", (req,res)=>{
    res.send("Employee Details")
})


app.listen(5000, (err)=>{
    if(err) throw err
    console.log("Server is Running on port Number: 5000")
});