var { Question } = require("../../models/question");

var getQuestions = async (req, res, next) => {
  const { id } = req.params;

  try {
    var questions = await Question.find({ category: id });
    if (!questions) {
      throw Error("No Categories Found");
    } else {
      res.status(200).send(questions);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getQuestions;
