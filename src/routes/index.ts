import express from "express";
import { mintService } from "../services";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("got requrest on router");
  res.json({ status: "server is working fine" });
});

router.post("/mint", async (req, res) => {
  try {
    const response: any = await mintService(req.body);
    res.status(response.code).json(response.json);
  } catch (serviceError) {
    console.error("serviceError: ", serviceError);
    res.status(500).json({ status: "Internal server error" });
  }
});

export default router;
