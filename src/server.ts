import express from "express"

const app = express();

app.get("/ranking", (req, res) => {
  res.send("Server is running")
})

export default app;