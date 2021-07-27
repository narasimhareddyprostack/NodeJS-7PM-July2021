const express = require('express');
const app = express()
app.get('/', (req,res)=>{
    res.send("Root Request")
})

app.listen(5000,(err)=>{
    if(err) throw err
    console.log(`Servr Running on port Number: ${5000}`)
})