import express from "express";
import morgan from "morgan";
import router from "./routes/index";

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/", router);

// app.get("/", (req, res) => {
//   console.log("request to /");
//   res.send("server working");
// });

const server = app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
