const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Users = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String || Number,
    required: true,
  },
});

module.exports = mongoose.model("UsersModel", Users);
