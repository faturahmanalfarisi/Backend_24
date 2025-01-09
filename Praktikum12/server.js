// server.js

const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json()); // Middleware untuk parsing JSON

app.use(router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
