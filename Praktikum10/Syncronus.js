// Synchronous.js
const { persiapan, rebusAir, masak } = require("./Persiapan");

class ProcessQueue {
    async executeProcess() {
        try {
            console.log("Memulai proses memasak...");
            
            // Menggunakan async/await untuk menangani proses berurutan
            const hasilPersiapan = await persiapan();
            console.log(hasilPersiapan);
            
            const hasilRebus = await rebusAir();
            console.log(hasilRebus);
            
            const hasilMasak = await masak();
            console.log(hasilMasak);
            
            console.log("Semua proses selesai!");
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    }
}

// Membuat instance dan menjalankan proses
const processor = new ProcessQueue();
processor.executeProcess();