const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});
app.listen(3000, () => {
  console.log("APP LISTENING ON PORT 3000");
});
