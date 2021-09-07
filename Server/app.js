require("./dal");
const express = require("express");
const cors = require("cors");
const postsController = require("./controllers/post");

const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/posts/", postsController);
server.listen(3000, () => console.log("Listening on http://localhost:3000"));
