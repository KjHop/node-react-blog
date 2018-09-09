const mongoose = require("mongoose");

exports.postSchema = new mongoose.Schema({
  title: String,
  date: String,
  tags: String,
  text: String,
  src: String,
  postNumber: Number
});