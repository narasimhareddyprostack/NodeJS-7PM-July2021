const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {

    res.send(`<h1>Product Root - Request</h1>`)
})
/*
    Name: localhost:5000/product/uload
*/
router.get("/upload", (req, res) => {
    res.send("Product Upload")
})
module.exports = router