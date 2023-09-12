import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express");
});

var port = process.env.PORT || 3000;

app.listen(port, () => console.log("Application started on port 3000!"));
