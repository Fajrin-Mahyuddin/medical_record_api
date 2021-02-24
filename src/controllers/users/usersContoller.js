const usersModel = require("../../models/users/usersModel");

exports.getUser = async (req, res) => {
  usersModel
    .find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(400).send("gagal"));
};

exports.storeUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new usersModel({
    name,
    email,
    password,
  });

  user.save();
  res.status(200).json({ message: "success" });
};
