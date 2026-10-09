// ==============================================================
// 1. Data Aktivitas
// Array berisi beberapa Object
// ==============================================================

const aktivitas = [
    {
        id : 1,
        nama : "Belajar HTML",
        selesai : false,
    },
    {
        id : 2,
        nama : "Belajar CSS",
        selesai : false,
    },
    {
        id : 3,
        nama : "Belajar Javascript",
        selesai : false,
    },
    {
        id : 4,
        nama : "Upload ke Github",
        selesai : false,
    },
];


// =================================================================
// 2. Mengambil Elemen HTML
// DOM digunakan untuk mengakses Halama
// =================================================================
const daftarAktivitas = document.getElementById("daftar-aktivitas")
const jumlahSelesai= document.getElementById("jumlah-selesai")
const persentase = document.getElementById("persentase")
const progressBar = document.getElementById("progress-bar")


// =================================================================
// 3. Function Menampilkan Aktivitas
// Loop membaca Array satu per satu
// =================================================================

function tampilkanAktivitas(){
    // Kosongkan daftar sebelum membuat ulang isinya.
    // Ini mencegah item yang sama muncul berulang kali
    daftarAktivitas.innerHTML = "";

    // Membaca setiap object dalam array aktivitas
    for (let item of aktivitas){

        // Membuat <li> baru
        const li = document.createElement("li");

        // memberi class untuk styling css
        li.className = "activity-item";

        // Membuat element <span> untuk nama aktivitas
        const nama = document.createElement("span");
        nama.className = "activity-name";

        // Memasukan nama aktivitas untuk nama aktivitas
        nama.textContent = item.nama;

        // Jika aktivitas selesai, tanbahkan class selesai
        if (item.selesai === true){
            nama.classList.add("selesai");

        }
            // Membuat tombol untuk mengubah status aktivitas
            const tombol = document.createElement("button");
            tombol.className = "btn-toggle";


            // Menyimpan id aktivitas pada tombol 
            // dataset menyimpan nilai sebagai string
            tombol.dataset.id = item.id;

        // Menentukan tombol berdasarkan status
        if (item.selesai === true){
            tombol.textContent = "Selesai";
            tombol.classList.add("sudah-selesai");
        }else {
            tombol.textContent = "Tandai Selesai"
        }

        // Memasukan nama dan tombol ke dalam elemen <li>
        li.appendChild(nama);
        li.appendChild(tombol);

        // memasukan <li> ke dalam <ul>
        daftarAktivitas.appendChild(li);
        
    }

    // Setelah daftar dibuat, perbarui progress
    perbaruiProgress();
}

// ============================================================
// 4. Function Memperbarui Progress
// MEnghitung berapa aktivitas yang selesai
// ============================================================

function perbaruiProgress(){
    // Menghitung jumlah seluruh aktivitas
    const total = aktivitas.length;

    // Nilai awal jumlah aktivitas selesai
    let selesai = 0;

    // memeriksa setiap aktivitas 
    for (let item of aktivitas){

        // Jika status selsai, tembahkan penghitung

        if (item.selesai === true){
            selesai++;
        }
    }

    // Menghindari pembagian dengan nol
    let persen = 0;

    if (total > 0 ){
        persen = Math.round ((selesai / total) * 100);
    }

    // Mengubah tulisan progress di HTML
    jumlahSelesai.textContent = selesai + " dari " + total;

    persentase.textContent = persen + "% Aktivitas Selesai";

    // Mengubah lebar progress bar sesaui persentase
    progressBar.style.width = persen + "%"
}


// ================================================================
// 5. Event Klik Daftar Aktivitas
// Menangani klik tombol untuk mengubah status// 
// ================================================================

daftarAktivitas.addEventListener("click", function (event){

    // Memastikan yang diklik adalah tombol aktivitas
    if(event.target.classList.contains("btn-toggle")){
        
        // Mengambil id dari tombol yang di klik
        const id = Number(event.target.dataset.id);

        // Mencari object aktivitas dengan id tersebut
        const item = aktivitas.find(function (aktivitasItem){
            return aktivitasItem.id === id;
        });

        // Jika aktivitas ditemukan, ubah statusnya 
        if (item !== undefined) {

            // true menjadi false, atau false menjadi true
            item.selesai = !item.selesai;

            // Tampilkan ulang daftar dan hitung progress
            tampilkanAktivitas();
        };
    };
});


// =================================================================== 
// 6. Menampikan Data Pertama Kali
// Dijalankan ketika script dibaca
// ===================================================================
tampilkanAktivitas();