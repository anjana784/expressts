import express, { json } from "express";

const app = express();

// global middleware
app.use(json());

// routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;