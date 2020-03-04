var { Question } = require("../../models/question");

var addQuestion = async (req, res, next) => {
  try {
    const { question, answerindex, answers, activeCategoryId } = req.body;
    var data = await new Question({
      question,
      answerindex,
      answers,
      category: activeCategoryId
    });
    var newQuestion = await data.save();
    if (newQuestion) {
      res.status(200).send(newQuestion);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = addQuestion;
