const express = require("express"),
  router = express.Router();

var addQuiz = require("../controller/quiz/addQuiz");
var getUserQuiz = require("../controller/quiz/getUserQuiz");

router.post("/", addQuiz);

router.get("/:id", getUserQuiz);
// router.delete("/", deleteQuestion);
// router.put("/", updateQuestion);

module.exports = router;
