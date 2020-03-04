const express = require("express"),
  router = express.Router();

var adminSignup = require("../controller/admins/adminSignup");
var adminLogin = require("../controller/admins/adminLogin");

// var userLogin = require("../controller/users/userLogin");
var getAdmin = require("../controller/admins/getAdmin");

router.post("/signup", adminSignup);
router.post("/login", adminLogin);
router.get("/getAdmin/:id", getAdmin);

module.exports = router;
