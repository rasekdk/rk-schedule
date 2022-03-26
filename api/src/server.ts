import express from "express";
import "dotenv/config";

const app = express();
const env = process.env;
const port = env.PORT || 8080;

app.get("/", async (req, res) => res.send("Hello world!!!"));

// tslint:disable-next-line:no-consoleclear
app.listen(port, () => console.log(`Sever running at port ${port}`));
