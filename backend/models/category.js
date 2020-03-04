const mongoose = require("mongoose");

var CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { usePushEach: true }
);

var Category = mongoose.model("Category", CategorySchema);
module.exports = { Category };
