const mongoose = require("mongoose");
const { Schema, model } = mongoose; //destructured the object

const courseSchema = Schema({
  courseid: Number,
  code: String,
  title: String,
  crhr: Number,
  semester: Number,
});

module.exports = model("Course", courseSchema);
