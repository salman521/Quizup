var { Quiz } = require("../../models/quiz");

var getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    var quizes = await Quiz.find({ userId: id }).populate("category");
    if (!quizes) {
      throw Error("No Quizzes Found");
    } else {
      res.status(200).send(quizes);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getUser;
