const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const mongoose = require("mongoose");
const Acronym = require("./models/model");

mongoose.connect("mongodb://localhost/database", { useNewUrlParser: true });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//   res.render("index");
// });

app.get("/", async (req, res) => {
  const list = await Acronym.find({});
  res.render("index", { list: list });
});

app.post("/acroynm", async (req, res) => {
  let acronym = new Acronym({
    acronym: req.body.acronym,
    definition: req.body.definition,
  });
  try {
    acronym = await acronym.save();
    res.redirect("/");
  } catch (e) {
    res.send(e);
  }
});

app.patch("/:id", async (req, res) => {
  await Acronym.findByIdAndUpdate(req.params.id, {
    acronym: req.body.acronym,
    definition: req.body.definition,
  });
  res.redirect("/");
});

app.delete("/:id", async (req, res) => {
  await Acronym.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
