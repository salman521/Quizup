const express = require("express"),
  router = express.Router();

var addQuestion = require("../controller/questions/addQuestion");

router.post("/", addQuestion);
// router.post("/login", userLogin);
// router.get("/getUser/:id", getUser);

module.exports = router;
