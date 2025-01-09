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


  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

const object = new StudentController();
module.exports = object;

