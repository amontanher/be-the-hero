const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Home /");
});

/*
Types of Request Parameters

1) Query Params
  Named parameters sent on the route after "?" (Filters, pagination);
  request.query
2) Route Params:
  Parameters used to identify resources;
  request.params
3) Request Body:
  Request Body, used to create / change resources;
  request.body
  Here it is important to enable JSON for requests so that
    Node understands and does not return undefined
*/

app.post("/users", (req, res) => {
  console.log(req.body);
  return res.json({
    id: 21
  });
});

app.listen(3333);
