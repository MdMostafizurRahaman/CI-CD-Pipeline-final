const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is a practice for CICD!");
});

module.exports = app;
