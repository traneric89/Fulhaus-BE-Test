const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const Acronym = require("./models/model");

mongoose.connect("mongodb://localhost/database", { useNewUrlParser: true });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/list", async (req, res) => {
  const list = await Acronym.find({});

  try {
    res.send(list);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/acroynm", async (req, res) => {
  let acronym = new Acronym({
    acronym: req.body.acronym,
    definition: req.body.definition,
  });
  try {
    acronym = await acronym.save();
    console.log(acronym);
  } catch (e) {
    res.send(e);
  }
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
