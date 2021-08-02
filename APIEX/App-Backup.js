const express = require('express')
const app = express()
app.get("/", (req, res) => {
    res.send(`<h1>Testing</h1>`)
});
app.get("/user", (req, res) => {
    res.send(`<h1>User</h1>`)
})
app.get("/user/login", (req, res) => {
    res.send(`<h1>User Login</h1>`)
})
app.get("/user/registration", (req, res) => {
    res.send(`<h1>User Registration</h1>`)
})
app.listen(5000, (err) => {
    if (err) throw err
    console.log(`Server Running... ${5000}`)
})