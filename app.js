const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("RAkib Hello, World this is a practice for CICD!");
});

module.exports = app;
