const express = require("express");
const router = express.Router();
const {
  storeUser,
  getUser,
} = require("../../controllers/users/usersContoller");

router.get("/user/list", getUser);
router.post("/user/store", storeUser);

module.exports = router;
