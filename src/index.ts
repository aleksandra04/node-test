import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.post("/data", (req, res) => {
  const data = req.body.data;
  console.log("data123", data);

  res.sendStatus(201);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Application started on port 3000!"));
