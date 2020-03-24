const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Home /");
});

routes.post("/users", (req, res) => {
  return res.json({ id: 1 });
});

module.exports = routes;
