import express from "express";
import "dotenv/config";

import userControllers from "./controllers/users/controllers";
import mongoose from "mongoose";

const app = express();
const env = process.env;
const port = env.PORT || 8080;

app.use(express.json());
app.use(express.Router());

mongoose.connect(env.MONGODB_LINK);

app.get("/", (req, res) => res.send("Hello world!!!"));

app.get("/users", userControllers.getAllUsers);

app
  .route("/user")
  .get(userControllers.getSingleUser)
  .post(userControllers.register);

// tslint:disable-next-line:no-consoleclear
app.listen(port, () => console.log(`Sever running at port ${port}`));
