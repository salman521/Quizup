const mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { usePushEach: true }
);

var User = mongoose.model("User", UserSchema);
module.exports = { User };
