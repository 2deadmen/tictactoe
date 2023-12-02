const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  player1: {
    type: String,
    required: true,
  },
  player2: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("log", logSchema);
