const bcrypt = require("bcryptjs");
let user_Payment = {
  user_Id: "GL123",
  cc_No: "5555666677778888",
  cvv: "9000",
};

let new_CC_No = bcrypt.hashSync(user_Payment.cc_No, 10);
let new_cvv = bcrypt.hashSync(user_Payment.cvv, 10);

let new_User_Payment = { ...user_Payment, cc_No: new_CC_No, cvv: new_cvv };
console.log(new_User_Payment);
