var { Question } = require("../../models/question");

var deleteQuestion = async (req, res, next) => {
  const { id } = req.query;
  console.log(id);
  try {
    var category = await Question.findOneAndDelete({ _id: id });
    if (!category) {
      throw Error("No Question Found");
    } else {
      res.status(200).send();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = deleteQuestion;
