const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send(`<h1>Testing</h1>`)
});
app.use("/user", require('./router/userRouter'))
app.use("/product", require('./router/productRouter'))

app.listen(5000, (err) => {
    if (err) throw err
    console.log(`Server Running... ${5000}`)
})