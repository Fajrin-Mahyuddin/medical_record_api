const RoomModel = require("../../models/Rooms/RoomModel");

exports.createRoom = (req, res, next) => {
  const Post = new RoomModel({
    kode: req.body.kode,
    nama: req.body.nama,
    kategori: req.body.kategori,
    keterangan: req.body.keterangan,
  });

  Post.save()
    .then((respon) => {
      res.json({
        message: "Sucess !",
        data: respon,
      });
    })
    .catch((err) => console.log("error ki waktu create", err));
};

exports.getRooms = (req, res, next) => {
  res.json({
    message: "Sucess !",
    data: [
      {
        kode: 1,
        nama: "mawar",
        kategori: "bunga",
        keterangan: "aktif"
      },
    ],
  });
  next();
};
