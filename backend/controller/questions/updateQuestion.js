var { Question } = require("../../models/question");

var updateQuestion = async (req, res, next) => {
  try {
    const { id } = req.body;

    var result = await Question.findOneAndUpdate({ _id: id }, req.body);
    if (!result) {
      throw Error("Cannot Update");
    } else {
      res.status(200).send();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = updateQuestion;
