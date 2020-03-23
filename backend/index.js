const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Express Init");
});

app.listen(3333);
