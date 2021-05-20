const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Room = new Schema({
  kode: {
    type: Number,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  Kategori: {
    type: String,
    required: true,
  },
  keterangan: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("RoomModel", Room);
