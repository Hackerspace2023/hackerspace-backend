const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Server Online" });
});

app.get("/api", (req, res) => {
  res.json({ message: "API Online" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
