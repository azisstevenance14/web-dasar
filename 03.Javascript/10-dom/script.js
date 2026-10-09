// ======================================================
// DOM DASAR JAVASCRIPT
// ======================================================
// 
// ======================================================
// 1. object user
// ======================================================

const user = {
    nama : "Azis",
    umur : 17,
    kota : "Gorontalo",
};


// ======================================================
// 2. Array Hobi
// ======================================================
const hobi = [
    "Coding",
    "Belajar Javascript",
    "Bisnis",
];


// ======================================================
// 3. Mengambil Element HTML
// ======================================================
// 
// document.getElementById()
// digunakan untuk mengambil element berdasarkan id


const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const namaUser = document.getElementById("nama-user");
const umurUser = document.getElementById("umur-user");
const statusUser = document.getElementById("status-user");
const daftarHobi = document.getElementById("daftar-hobi");

// =======================================================
// 4. Mengubah text
// =======================================================
judul.textContent = "Halo, Selamat Datang";
pesan.textContent = "Data Halaman ini diubah menggunakan Javascript";


// =======================================================
// 5. Menampilkan data object
// =======================================================
namaUser.textContent = "Nama: " + user.nama;
umurUser.textContent = "Umur: " + user.umur;

// =======================================================
// 6. Conditional
// =======================================================
if (user.umur >= 18){
    statusUser.textContent = "Status: sudah Dewasa";
} else{
    statusUser.textContent = "Status: Belum Dewasa";
};


// =======================================================
// 7. Conditional
// =======================================================
// function digunakan untuk membuat proses yang bisa kita 
// panggil kembali.
function tampilkanHobi(cekHobi){
    // ===================================================
    //  Loop di dalam function
    // ===================================================
        for (let i = 0; i < cekHobi.length; i++){
            // Membuat Element li
            const li = document.createElement("li");
        

            // mengisi text <li>
            li.textContent = cekHobi[i];


            // Memasukan <li> ke dalam <ul>

            daftarHobi.appendChild(li);
        };
};
tampilkanHobi(hobi);