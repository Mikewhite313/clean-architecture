// user-routes.js
const express = require("express");
const router = express.Router();

const setUpUserRoutes = (userController) => {
  router.post("/api/user/create", userController.create.bind(userController));
  return router;
};

module.exports = setUpUserRoutes;
