const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
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

/**
 * Database
 * Install Driver: "SELECT * FROM USERS"
 * OR
 * Query Builder: table('users').select('*').where() => KNEX.JS
 */
