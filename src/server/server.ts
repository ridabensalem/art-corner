import express, { Request, Response } from "express";
import connectDB from "../db/connect.ts";
import User from "../db/schema/users.ts";
import Comments from "../db/schema/comments.ts";
import Post from "../db/schema/posts.ts";
import Likes from "../db/schema/likes.ts";
import mongoose from "mongoose";
const app = express();
// middleware
app.use(express.json());

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
// start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
// connect to mongoDB
connectDB();

// create a user
app.post("/users", async (req: Request, res: Response) => {
  try {
    const {name, email, password, likes, comments} = req.body;
    const user = await User.create({name, email, password, likes, comments});
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
}
);
// create a post
app.post("/posts", async (req: Request, res: Response) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({ post });
  } catch (error) {
    res.status(500).json({ error });
  }
}
);


// create a comment
app.post("/comments", async (req: Request, res: Response) => {
  try {
    const comment = await Comments.create(req.body);
    res.status(201).json({ comment });
  } catch (error) {
    res.status(500).json({ error });
    console.log('cannot create comment');
  }
}
);
// create a like
app.post("/likes", async (req: Request, res: Response) => {
  try {
    const like = await Likes.create(req.body);
    res.status(201).json({ like });
  } catch (error) {
    res.status(500).json({ error });
  }
}
);

