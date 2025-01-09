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



