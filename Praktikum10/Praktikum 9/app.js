// TODO 9: Import semua method FruitController

var { index, store, update, destroy } = require("./fruitController");

// NOTES: fungsi main tidak perlu diubah
// jalankan program: nodejs app.js

const main = () => {
    // Menampilkan semua data buah
    index();

    // Menambahkan buah Pisang
    store("Pisang");

    // Mengupdate data buah
    update(0, "Kelapa");

    // Menghapus data buah
    destroy(0);
};

main();