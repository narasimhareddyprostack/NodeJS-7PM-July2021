//ES5
const fs = require("fs");

//reading the synchronous
/* let data = fs.readFileSync("classnotes.txt", "utf-8");
console.log(data); */

//reading a asynchronous

fs.readFile("classnotes.txt", "utf-8", (err, newData) => {
  fs.writeFile("one.txt", newData, (err) => {
    if (err) throw err;
    console.log("Writing file Successfull");
  });
});
