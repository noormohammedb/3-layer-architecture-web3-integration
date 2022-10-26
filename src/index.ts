import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("request to /");
  res.send("server working");
});

const server = app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
