const express = require("express");
const router = express.Router();
const {
  storeUser,
  getUser,
} = require("../../controllers/users/usersContoller");
const { authRoute } = require("../auth/authRoute");

router.get("/user/list", authRoute, getUser);
router.post("/user/store", storeUser);

module.exports = router;
