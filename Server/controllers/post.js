const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const postsLogic = require("../logic/post-logic");

//GET http://localhost:3000/api/posts/all
router.get("/all", async (request, response) => {
  try {
    const Posts = await postsLogic.getAllPosts();
    response.json(Posts);
  } catch (error) {
    response.status(500).send(error);
  }
});

//GET http://localhost:3000/api/posts/post/613714da9f05072618f5d6f2
router.get("/post/:id", async (request, response) => {
  const id = request.params.id;
  try {
    const post = await postsLogic.getOnePost(id);
    response.json(post);
  } catch (error) {
    response.status(500).send(error);
  }
});

//POST http://localhost:3000/api/posts/
router.post("/", async (request, response) => {
  const newPost = new Post(request.body);
  try {
    const post = await postsLogic.addOnePost(newPost);
    response.json(post);
  } catch (error) {
    response.status(500).send(error);
  }
});

// PUT http://localhost:3000/api/posts/post/:_id
router.put("/post/:_id", async (request, response) => {
  const postUpdate = new Post(request.body);

  try {
    const post = await postsLogic.updatePost(postUpdate);
    response.json(post);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
