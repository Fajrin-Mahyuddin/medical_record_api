const ProductsModel = require("../models/products");

exports.createProduct = (req, res, next) => {
  const Post = new ProductsModel({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
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

exports.getProducts = (req, res, next) => {
  res.json({
    message: "Sucess !",
    data: [
      {
        id: 1,
        nama: "Fajrin ",
      },
      {
        id: 2,
        nama: "Mahyuddin",
      },
    ],
  });
  next();
};
