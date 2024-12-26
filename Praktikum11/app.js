// Import express
const express = require("express");

// Import router dari file api.js
const router = require("./routes/api");

// Membuat object express
const app = express();

// Middleware untuk menangkap body request dalam format JSON atau URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan routing
app.use(router);

// Mendefinisikan port dan menjalankan server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
