// Download.js
const downloadFile = (file) => {
    console.log(`Mulai mengunduh ${file}...`);
    return new Promise((resolve, reject) => {
        const fakeDownloadTime = Math.random() * 5000;
        const successRate = 0.8;
        
        setTimeout(() => {
            if (Math.random() < successRate) {
                resolve({
                    file: file,
                    status: 'success',
                    message: `Berhasil mengunduh ${file}`
                });
            } else {
                reject({
                    file: file,
                    status: 'failed',
                    message: `Gagal mengunduh ${file}`
                });
            }
        }, fakeDownloadTime);
    });
};

// Implementasi dengan Promise
const downloadWithPromise = (files) => {
    console.log('=== Menggunakan Promise ===');
    return Promise.all(files.map(file => downloadFile(file)))
        .then(results => {
            console.log('Semua file berhasil diunduh:', results);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
};

// Implementasi dengan Async/Await
const downloadWithAsync = async (files) => {
    console.log('=== Menggunakan Async/Await ===');
    try {
        const results = await Promise.all(files.map(file => downloadFile(file)));
        console.log('Semua file berhasil diunduh:', results);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};

// Contoh penggunaan
const filesToDownload = ['file1.pdf', 'file2.jpg', 'file3.doc'];

// Menjalankan kedua fungsi secara berurutan
const runDownloads = async () => {
    await downloadWithPromise(filesToDownload);
    await downloadWithAsync(filesToDownload);
};

runDownloads();