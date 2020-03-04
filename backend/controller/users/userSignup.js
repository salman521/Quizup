var { User } = require("../../models/user");

var userSignup = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    var data = await new User({
      email: email.trim(),
      password: password.trim(),
      name
    });
    var newUser = await data.save();
    if (newUser) {
      res.status(200).send(newUser);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = userSignup;
