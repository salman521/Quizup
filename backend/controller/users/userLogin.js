var { User } = require("../../models/user");

var userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    var user = await User.findOne({ email, password });
    if (!user) {
      throw Error("No User Found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = userLogin;
