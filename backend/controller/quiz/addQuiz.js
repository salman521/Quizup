var { Quiz } = require("../../models/quiz");

var addQuiz = async (req, res, next) => {
  try {
    const { marks, category, userId } = req.body;
    var data = await new Quiz({
      marks,
      category,
      userId
    });
    var newQuiz = await data.save();
    if (newQuiz) {
      res.status(200).send(newQuiz);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = addQuiz;
