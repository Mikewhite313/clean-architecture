require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./config/mongodb");

const userRoutes = require("./dependency-injection/user");
app.use(userRoutes);

app.listen(3000, () => {
  console.log(3000);
});
