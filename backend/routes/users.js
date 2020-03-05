const express = require("express"),
  router = express.Router();

var userSignup = require("../controller/users/userSignup");
var userLogin = require("../controller/users/userLogin");
var getUser = require("../controller/users/getUser");
var getUsers = require("../controller/users/getUsers");

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/getUser/:id", getUser);
router.get("/", getUsers);

module.exports = router;
