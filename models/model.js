const mongoose = require("mongoose");

const acronymSchema = new mongoose.Schema({
  acronym: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Acronym", acronymSchema);
