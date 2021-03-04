const usersModel = require("../../models/users/usersModel");
const bcrypt = require("bcrypt");

exports.getUser = async (req, res) => {
  usersModel
    .find()
    .select("-password")
    .then((response) => {
      res.status(200).json({ message: "success", data: response });
    })
    .catch((err) => res.status(400).send(err));
};

exports.storeUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(req.body.password, salt);

  const nameExists = await usersModel.findOne({ name: name });
  if (nameExists) {
    console.log("responseeeee", nameExists);
    res.status(400).json({ message: "bad" });
  } else {
    const user = new usersModel({
      name,
      email,
      password: passwordHash,
    });
    user.save();
    res.status(200).json({ message: "success" });
  }
};
