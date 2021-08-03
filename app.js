const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send(
    "Hello World! I'm Massimo and I'm alive! and just change a little bit"
  )
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
