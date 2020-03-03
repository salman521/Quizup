const express = require("express"),
  router = express.Router();

var userSignup = require("../controller/users/userSignup");
var userLogin = require("../controller/users/userLogin");
var getUser = require("../controller/users/getUser");

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/getUser/:id", getUser);

module.exports = router;
