const jwt = require("jsonwebtoken");
const usersModel = require("../../models/users/usersModel");

exports.authRoute = async (req, res, next) => {
  const token = req.header("token");
  if (!token) res.status(401).send("access denied !");
  try {
    const jwtToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await usersModel.findOne({ _id: jwtToken._id });
    console.log("from auth", user);
    next();
  } catch (err) {
    res.status(401).send("token expired !");
  }
};
