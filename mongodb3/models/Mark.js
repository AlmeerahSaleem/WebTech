const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

const markSchema = new Schema({
  mid: Number,
  regno: String,
  hid: Number,
  marks: Number,
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student", //schema file name
  },
});

module.exports = model("Mark", markSchema);
