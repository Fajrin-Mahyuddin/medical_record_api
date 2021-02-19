exports.createProduct = (req, res, next) => {
  console.log("ini", req.body.baco);

  res.json({
    message: "Sucess !",
    data: {
      id: 1,
      nama: req.body.baco,
    },
  });
  next();
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
