import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("got requrest on router");
  res.send("foo");
});

export default router;
