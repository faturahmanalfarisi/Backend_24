// Import express
const express = require("express");

// Import StudentController
const StudentController = require("../controllers/studentController");

// Membuat object router
const router = express.Router();

/**
 * Routing dasar
 * Endpoint: "/"
 */
router.get("/", (req, res) => {
  res.send("Hello Express");
});

/**
 * Routing students
 */
router.get("/students", StudentController.index); // GET semua students
router.post("/students", StudentController.store); // POST tambah student
router.put("/students/:id", StudentController.update); // PUT edit student
router.delete("/students/:id", StudentController.destroy); // DELETE hapus student

// Export router
module.exports = router;
