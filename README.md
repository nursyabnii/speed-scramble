# Acak Kata Cepat / Speed Scramble
Sebuah game tebak kata berbasis web yang simpel, seru, dan adiktif. Susun huruf-huruf acak menjadi sebuah kata yang benar sebelum waktu habis! Game ini dibuat menggunakan HTML, CSS, dan JavaScript murni (Vanilla JS), tanpa memerlukan library atau framework eksternal.

(Anda bisa mengganti link gambar di atas dengan screenshot game Anda sendiri)

## ✨ Fitur Utama
Gameplay Sederhana & Adiktif: Pemain harus menebak kata dari huruf yang diacak dalam batas waktu.

Sistem Skor & Waktu: Setiap jawaban benar akan menambah skor dan memberikan bonus waktu, membuat permainan semakin menantang.

Skor Tertinggi (High Score): Game secara otomatis menyimpan skor tertinggi Anda di browser menggunakan localStorage, jadi Anda bisa terus mencoba memecahkan rekor sendiri!

Multi-Kategori: Database kata yang luas dengan berbagai pilihan kategori seperti Hewan, Buah-buahan, Negara, dan lainnya.

Multi-Bahasa: Mendukung dua bahasa (🇮🇩 Indonesia & 🇬🇧 Inggris). Seluruh antarmuka, kategori, dan kata-kata akan berubah sesuai bahasa yang dipilih.

Desain Responsif: Tampilan yang bersih dan dapat beradaptasi dengan baik di perangkat desktop maupun mobile.

## 🚀 Teknologi yang Digunakan
HTML5: Untuk struktur dan kerangka konten game.

CSS3: Untuk styling, layout, dan membuat tampilan menjadi menarik.

JavaScript (ES6+): Untuk semua logika game, interaksi, dan manipulasi DOM.

## 🏁 Cara Menjalankan (Getting Started)
Game ini tidak memerlukan instalasi atau server khusus. Cukup ikuti langkah-langkah berikut:

Unduh atau Clone Repositori

Bash

git clone https://github.com/NAMA_USER_ANDA/NAMA_REPO_ANDA.git
(Atau cukup unduh file ZIP jika Anda tidak menggunakan Git)

Buka Folder Proyek
Navigasikan ke direktori tempat Anda menyimpan file game.

Bash

cd NAMA_REPO_ANDA
Buka File index.html
Cukup klik dua kali pada file index.html atau buka file tersebut menggunakan browser web favorit Anda (seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge).

Game siap dimainkan!

## 🎮 Cara Bermain
Pilih Bahasa: Klik ikon bendera 🇮🇩 untuk Bahasa Indonesia atau 🇬🇧 untuk Bahasa Inggris di pojok kanan atas.

Pilih Kategori: Pilih salah satu kategori kata yang tersedia dari menu dropdown.

Mulai Game: Tekan tombol "Mulai Game".

Tebak Kata: Lihat huruf-huruf yang diacak, lalu ketik jawaban Anda di kotak input.

Periksa Jawaban: Tekan tombol "Periksa Jawaban" atau tekan Enter.

Kumpulkan Skor: Jika jawaban benar, skor Anda akan bertambah 10 poin dan waktu akan bertambah 5 detik.

Pecahkan Rekor: Permainan berakhir saat waktu habis. Jika skor Anda melebihi rekor sebelumnya, skor tertinggi yang baru akan disimpan.

## 🔧 Kustomisasi
Anda dapat dengan mudah menambahkan kata, kategori, atau bahkan bahasa baru dengan mengedit file script.js.

Menambah Kata atau Kategori
Buka file script.js dan cari konstanta wordData. Ikuti struktur yang ada untuk menambahkan kategori baru atau kata baru di dalam kategori yang sudah ada.

Contoh Struktur:

JavaScript

const wordData = {
    id: {
        "Kategori Baru 💡": ["KATA1", "KATA2", "KATA3"],
        // ... kategori lainnya
    },
    en: {
        "New Category 💡": ["WORD1", "WORD2", "WORD3"],
        // ... other categories
    }
};
Pastikan untuk menambahkan kategori dan kata yang sesuai untuk kedua bahasa (id dan en).