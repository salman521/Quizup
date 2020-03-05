const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  PORT = 5000,
  userRoutes = require("./routes/users"),
  categoryRoutes = require("./routes/category"),
  questionRoutes = require("./routes/questions"),
  quizRoutes = require("./routes/quiz"),
  adminRoutes = require("./routes/admins");

var cors = require("cors");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/QuizUp", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/admins", adminRoutes);
app.use("/categories", categoryRoutes);
app.use("/questions", questionRoutes);
app.use("/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Quiz Up Api!!");
});
//////////////////////////////////////////////////// Redux Test Starts /////////////////////////////////////////////////
app.get("/test", (req, res) => {
  const Friends = [
    { name: "Usman", key: "0" },
    { name: "Rizwan", key: "1" },
    { name: "Saiem", key: "2" },
    { name: "Husnain", key: "3" },
    { name: "Abdullah", key: "4" },
    { name: "Waleed", key: "5" },
    { name: "Usama", key: "6" },
    { name: "Naveed", key: "7" }
  ];
  res.status(200).send(Friends);
});

//////////////////////////////////////////////////// Redux Test Ends ////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log("SERVER IS LISTENING ON PORT", PORT);
});
