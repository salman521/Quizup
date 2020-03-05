const express = require("express"),
  router = express.Router();

var addQuiz = require("../controller/quiz/addQuiz");

router.post("/", addQuiz);

// router.get("/:id", getQuestions);
// router.delete("/", deleteQuestion);
// router.put("/", updateQuestion);

module.exports = router;
