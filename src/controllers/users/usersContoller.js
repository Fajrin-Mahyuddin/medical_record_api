const usersModel = require("../../models/users/usersModel");
const bcrypt = require("bcrypt");

exports.getUser = async (req, res) => {
  usersModel
    .find()
    .select("-password")
    .then((response) => {
      res
        .status(200)
        .json({ message: "success", status: true, data: response });
    })
    .catch((err) => res.status(400).send(err));
};

exports.storeUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.password;
  if (!name || !email || !pass)
    res.status(400).json({ message: "Error, complete form !", status: false });
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(req.body.password, salt);

  const nameExists = await usersModel.findOne({ name: name });
  if (nameExists)
    res.status(400).json({ message: "name already exists", status: false });

  const user = new usersModel({
    name,
    email,
    password: passwordHash,
  });
  const save = user.save();
  save
    .then((response) => {
      res
        .status(200)
        .json({ message: "success", status: true, data: response });
    })
    .catch((error) => {
      res.status(400).json({ message: error, status: false });
    });
};
