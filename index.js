const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("common"));

// protecting routes with fake middleware
const verifyyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  res.send("sorry you need a password");
};

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

// this route is protected
app.get("/secret", verifyyPassword, (req, res) => {
  res.send("I hate programing but i cant stop");
});

app.listen(3000, () => {
  console.log("APP LISTENING ON PORT 3000");
});
