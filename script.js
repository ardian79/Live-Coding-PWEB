// --- MINI PROJECT COUNTER ---

// 1. Seleksi Elemen
const teksAngka = document.getElementById("angka-counter");
const btnTambah = document.getElementById("btn-tambah");
const btnKurang = document.getElementById("btn-kurang");
const btnReset = document.getElementById("btn-reset");

// 2. Buat Variabel Penampung Angka
let angka = 0;

// 3. Logika Tombol Tambah
btnTambah.addEventListener("click", function() {
    angka++; // artinya angka = angka + 1
    teksAngka.textContent = angka;
    teksAngka.style.color = "green"; // warna teks hijau jika ditambah

    // Memunculkan pop-up pesan ketika mencapai kelipatan 10
    if (angka % 10 === 0 && angka !== 0) {
        alert("Selamat, Anda mencapai " + angka + "!");
    }
});

// 4. Logika Tombol Kurang
btnKurang.addEventListener("click", function() {
    // Syarat opsional: Angka tidak boleh minus
    if (angka > 0) {
        angka--; 
        teksAngka.textContent = angka;
        teksAngka.style.color = "red"; // warna teks merah jika dikurang
    } else {
        alert("Angka sudah mencapai 0!");
    }
});

// 5. Logika Tombol Reset
btnReset.addEventListener("click", function() {
    angka = 0;
    teksAngka.textContent = angka;
    teksAngka.style.color = "black";
});
