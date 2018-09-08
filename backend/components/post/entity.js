const mongoose = require("mongoose");

export const postSchema = new mongoose.Schema({
  title: String,
  date: String,
  tags: String,
  text: String,
  src: String,
  postNumber: Number
});

export const Post = mongoose.model("Post", postSchema);
