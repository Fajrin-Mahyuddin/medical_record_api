const usersModel = require("../../models/users/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postLogin = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  const userCheck = await usersModel.findOne({ name: name });
  console.log("login session", userCheck);
  if (!userCheck) {
    res.status(400).send("username doesn't exists !");
  }
  const passwordUnHash = await bcrypt.compare(password, userCheck.password);
  if (!passwordUnHash) {
    res.status(400).send("wrong password !");
  }

  const token = jwt.sign({ _id: userCheck._id }, process.env.TOKEN_SECRET);
  res.status(200).json({ message: "wholaaa, you loged in...", token });
};

module.exports = postLogin;
