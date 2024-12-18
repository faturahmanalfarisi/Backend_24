// Persiapan.js
class MasakMie {
  constructor() {
      this.steps = {
          persiapan: 3000,
          rebusAir: 7000,
          masak: 5000
      };
  }

  async persiapan() {
      return await this.createPromise('Menyiapkan Bahan...', this.steps.persiapan);
  }

  async rebusAir() {
      return await this.createPromise('Merebus Air...', this.steps.rebusAir);
  }

  async masak() {
      return await this.createPromise('Memasak Mie...', this.steps.masak);
  }

  createPromise(message, delay) {
      return new Promise(resolve => setTimeout(() => resolve(message), delay));
  }

  async masakMie() {
      try {
          console.log('Mulai memasak mie...');
          
          const tahapPersiapan = await this.persiapan();
          console.log(tahapPersiapan);
          
          const tahapRebus = await this.rebusAir();
          console.log(tahapRebus);
          
          const tahapMasak = await this.masak();
          console.log(tahapMasak);
          
          console.log('Mie siap disajikan!');
      } catch (error) {
          console.error('Terjadi kesalahan:', error);
      }
  }
}

// Penggunaan
const masakMie = new MasakMie();
masakMie.masakMie();

module.exports = new MasakMie();