// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students");

class StudentController {
  // TODO 4: Tampilkan data students
  index(req, res) {
    const data = {
      message: "Menampilkan semua students",
      data: students,
    };
    res.json(data);
  }

  // TODO 5: Tambahkan data students
  store(req, res) {
    const { nama } = req.body; // Ambil data nama dari request body

    if (nama && !students.includes(nama)) {
      students.push(nama); // Tambahkan nama baru ke dalam array students
      const data = {
        message: `Menambahkan data student: ${nama}`,
        data: students,
      };
      res.json(data);
    } else {
      res.status(400).json({ message: "Nama sudah ada atau tidak valid!" });
    }
  }

  // TODO 6: Update data students
  update(req, res) {
    const { id } = req.params; // Ambil id student dari parameter URL
    const { nama } = req.body; // Ambil nama baru dari request body

    if (students[id]) {
      students[id] = nama; // Update nama student sesuai index (id)
      const data = {
        message: `Mengedit student id ${id}, nama ${nama}`,
        data: students,
      };
      res.json(data);
    } else {
      res.status(404).json({ message: "Student tidak ditemukan!" });
    }
  }

  // TODO 7: Hapus data students
  destroy(req, res) {
    const { id } = req.params; // Ambil id student dari parameter URL

    if (students[id]) {
      const deletedStudent = students.splice(id, 1); // Hapus student berdasarkan id
      const data = {
        message: `Menghapus student id ${id}`,
        data: students,
      };
      res.json(data);
    } else {
      res.status(404).json({ message: "Student tidak ditemukan!" });
    }
  }
}

module.exports = new StudentController(); // Export instance dari StudentController
