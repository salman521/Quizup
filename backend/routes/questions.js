const express = require("express"),
  router = express.Router();

var addQuestion = require("../controller/questions/addQuestion");
var getQuestions = require("../controller/questions/getQuestions");
var deleteQuestion = require("../controller/questions/deleteQuestion");
var updateQuestion = require("../controller/questions/updateQuestion");

router.post("/", addQuestion);
// router.post("/login", userLogin);
router.get("/:id", getQuestions);
router.delete("/", deleteQuestion);
router.put("/", updateQuestion);

module.exports = router;
