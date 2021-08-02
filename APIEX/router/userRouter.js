const express = require('express')
const router = express.Router();

/*
Name : localhost:5000/user
*/
router.get("/", (req, res) => {
    console.log("Inside User Router")
    res.send(`<h1>Root User - Request</h1>`)
})
/*
Name : localhost:5000/user/login
*/

router.post("/login", (req, res) => {
    //read Form Data/Body Data
    let { email, password } = req.body;
    res.send(`<h1>Login User - Request</h1>`)
})

/*
Name : localhost:5000/user/registration
*/
router.post("/registraion", (req, res) => {
    res.send(`<h1>Registration User - Request</h1>`)
})
/*
Name : localhost:5000/user/alluser
*/

router.get("/allusers", (req, res) => {
    res.send(`<h1>All Users User - Request</h1>`)
})


//es5 
module.exports = router;