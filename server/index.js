const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server Online" });
});

app.listen(3001, () => {
  console.log("Server running on port 3000");
});
