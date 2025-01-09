// import Model Student
const Student = require("../models/Student");



// controllers/StudentController.js

class StudentController {
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    console.log(req.body); // Periksa data yang diterima dari request

    try {
        const { id, name, age, address } = req.body;

        // Panggil method create di model
        const student = await Student.create({ id, name, age, address });

        res.status(201).json({
            message: "Berhasil menambahkan data student",
            data: student,
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal menambahkan data student",
            error: error.message,
        });
    }
}


async update(req, res) {
  const { id } = req.params; // Mengambil ID dari parameter
  const student = await Student.find(id); // Mencari student berdasarkan ID

  if (student) {
      // Melakukan update data
      const updatedStudent = await Student.update(id, req.body);
      const data = {
          message: 'Mengedit data students',
          data: updatedStudent,
      };

      res.status(200).json(data); // Mengembalikan response berhasil
  } else {
      const data = {
          message: 'Student not found',
      };

      res.status(404).json(data); // Mengembalikan response jika student tidak ditemukan
  }
}

// kode lain sebelumnya
async show(req, res) {
  const { id } = req.params;
  // cari student berdasarkan id
  const student = await Student.find(id);

  if (student) {
      const data = {
          message: `Menampilkan detail students`,
          data: student,
      };

      res.status(200).json(data);
  } else {
      const data = {
          message: `Student not found`,
      };

      res.status(404).json(data);
  }
}
// kode lain setelahnya



  // kode lain sebelumnya
async destroy(req, res) {
  const { id } = req.params;
  const student = await Student.find(id);

  if (student) {
      await Student.delete(id);
      const data = {
          message: `Menghapus data students`,
      };

      res.status(200).json(data);
  } else {
      const data = {
          message: `Student not found`,
      };

      res.status(404).json(data);
  }
}
// kode lain setelahnya

}

const object = new StudentController();
module.exports = object;

