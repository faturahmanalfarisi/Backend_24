// TODO 3: Import fruits dari data/fruits.js
var fruits = require("./fruits");

// TODO 4: Buat Method Index
function index() {
    console.log("Method index - Menampilkan buah");
    fruits.forEach((fruit) => console.log(fruit));
}

// TODO 5: Buat Method Store
function store(newFruit) {
    console.log("Method store - Menambahkan buah " + newFruit);
    fruits.push(newFruit);
    fruits.forEach((fruit) => console.log(fruit));
}

// TODO 6: Buat Method Update
function update(index, newFruit) {
    console.log("Method update - Update data " + index, "menjadi " + newFruit);
    fruits[index] = newFruit;
    fruits.forEach((fruit) => console.log(fruit));
}

// TODO 7: Buat Method Destroy
function destroy(index) {
    console.log("Method destroy - Menghapus data " + index);
    fruits.splice(index, 1);
    fruits.forEach((fruit) => console.log(fruit));
}

// TODO 8: Export Semua Method
module.exports = {
    index,
    store,
    update,
    destroy,
}