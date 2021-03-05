const express = require("express");
const postLogin = require("../../controllers/users/loginController");

const route = express.Router();

route.post("/login/post", postLogin);

module.exports = route;
