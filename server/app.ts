import express from "express";

const app = express();

app.get("/ping/:str?", (req, res) => {
  res.json({ pong: req.params.str || "pong" });
});

app.listen(80);
