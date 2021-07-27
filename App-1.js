//create server - http : node js core module

/* const http = require("http");
const server = http.createServer((req, res) => {
  res.end(`<h1>Hello, HTTP Server.......</h1>`);
});

server.listen(7000, (err) => {
  if (err) throw err;

  console.log("Server Running");
});
 */
/* require("http")
  .createServer((req, res) => {
    res.end(`<h1>Hello, Good Morning....</h1>`);
  })
  .listen(7000, () => {
    console.log("Server Running....");
  });
 */
require("http")
  .createServer((req, resp) => {
    resp.end("Hello......4");
  })
  .listen(4000, () => {
    console.log(`Servr Running...${4000}`);
  });
