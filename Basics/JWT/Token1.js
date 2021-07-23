//How to genereate token
const jwt = require('jsonwebtoken')
let user = {
    name:"Narasimha",
    email:"greetlabs@gmail.com",
    password:"123badc"
}
//let token  = jwt.sign(1,2,3)
let token = jwt.sign(user,'ccccccfds', (err, token)=>{
    if(err) throw err
    console.log(token)
})