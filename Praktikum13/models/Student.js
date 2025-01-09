// import database
const db = require("../config/database");

// membuat class Model Student
// models/Student.js

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }



  // kode lain sebelumnya

// Metode untuk mencari data student berdasarkan id
static find(id) {
  return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?"; // Query untuk mencari student
      db.query(sql, id, (err, results) => {
          if (err) {
              reject(err); // Jika terjadi error, reject promise
          } else {
              // Destructuring array untuk mendapatkan data student
              const [student] = results;
              resolve(student); // Resolve dengan data student
          }
      });
  });
}

// kode lain sebelumnya

// Metode untuk mengupdate data student
static async update(id, data) {
  return new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?"; // Query untuk update data student
      db.query(sql, [data, id], (err, results) => {
          if (err) {
              reject(err); // Jika terjadi error, reject promise
          } else {
              resolve(results); // Resolve dengan hasil query
          }
      });
  }).then(async () => {
      // Mencari data yang baru diupdate
      const student = await this.find(id);
      return student; // Mengembalikan data student yang baru diupdate
  });
}

// kode lain sebelumnya
// mencari data berdasarkan id
static find(id) {
  return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
          // destructing array
          const [student] = results;
          resolve(student);
      });
  });
}



// kode lain sebelumnya
// menghapus data dari database
static delete(id) {
  return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
          resolve(results);
      });
  });
}
// kode lain setelahnya


// kode lain setelahnya


  static create({ id, name, age, address }) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO students (id, name, age, address) VALUES (?, ?, ?, ?)";
        db.query(sql, [id, name, age, address], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve({
                id,
                name,
                age,
                address,
            });
        });
    });
}

}

module.exports = Student;



