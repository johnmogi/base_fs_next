const mongoose = require("mongoose");
const PostSchema = mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 30 },
  },
  { versionKey: false, toJSON: { virtuals: true }, id: false }
);

const Post = mongoose.model("Post", PostSchema, "posts");
module.exports = Post;
