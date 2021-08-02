const bcrypt = require("bcryptjs");
let userDetails = {
  name: "Srikanth",
  email: "psa@gmail.com",
  password: "PSA123",
};

let newPassword = bcrypt.hashSync(userDetails.password, 10);
console.log(newPassword);

userDetails = { ...userDetails, password: newPassword };
console.log(userDetails);

let x = bcrypt.compareSync("PSA1234", userDetails.password);
console.log(x);
if (bcrypt.compareSync("PSA1234", userDetails.password)) {
  console.log("Password - Matched");
} else {
  console.log("Password - Not Match");
}
