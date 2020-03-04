const express = require("express"),
  router = express.Router();

var addCategory = require("../controller/category/addCategory");
var getCategory = require("../controller/category/getCategory");

router.post("/addCategory", addCategory);

router.get("/", getCategory);
// router.get("/getAdmin/:id", getAdmin);

module.exports = router;
