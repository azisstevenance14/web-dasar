// =======================================================================================
// ARRAY JAVASCRIPT
// ======================================================================================= 
// Array digunakan untuk menyimpan banyak data dalam satu variabel
// 
// contoh :
const daftarNama= ["Azis", "Cindy"];
console.log(daftarNama);

// =======================================================================================
// 1. Isi Array
// =======================================================================================
//  Array dapat berisi data beberapa sekaligus 
const buah = ["Apel", "Mangga", "Jeruk", "Pisang"];
console.log(buah);

// =======================================================================================
// 2. Index pada Array
// =======================================================================================
//  array memiliki posisi yang disebut index 
// index dimulai dari angka 0
// 
//              Index
//                |
// ["Apel", "Mangge", "Jeruk", "Pisang"];
//     0        1        2         3
// 


// ========================================================================================
// 3. Mengambil Data Berdasarkan Index
// ========================================================================================
const daftarUser = ["Azis", "Cindy"];
const userPertama = daftarUser[0];
console.log(userPertama);
const userKedua = daftarUser[1];
console.log(userKedua);


// ======================================================================================== 
// 4. Mengubah Data Array
// ========================================================================================
// 
// array yang dibuat menggunakan const
// masih bisa di ubah isinya.
// yang tidak boleh adalah mengganti seluruh Array-nya.
// 

const warna = ["Merah", "Biru", "Hijau"];

console.log(warna);

// Mengubah data pada index 1
warna[1] = "Kunig";
console.log(warna);


// ======================================================================================== 
// 5. Menghitung Jumlah Data dengan .length
// ========================================================================================
// .length digunakan untuk mengetahui beberapa banyak data yang ada di dalam array.

const nama =["Azis","Cindy"];

console.log(nama.length);


// =========================================================================================
// 6. Array + Loop
// =========================================================================================
// Array akan sangat sering digunakan bersama Loop
// Kita mengambil berdsarkan data index.
 const daftarBuah = ["Apel", "Mangga", "Jeruk"];
 
 for(let i = 0; i < daftarBuah.length; i++){
    console.log(daftarBuah[i]);
 }


// ========================================================================================== 
// 7. Array + FOR...OF
// ==========================================================================================
// Kita juga bisa menggunakan for...of 
// untuk mengambil data Array satu per satu
 const daftarKota = ["Manado", "Makassar", "Gorontalo", "Gorontalo"];
 
 for (let kota of daftarKota){
    // Kita mengambil satu persatu data dari daftarKota

    console.log(kota);
 }


// =========================================================================================== 
// 8. Array Bisa Berisi Number
// ===========================================================================================
// 
const angka = [10, 20, 30, 40, 50];

console.log(angka[0]);
console.log(angka[3]);


// ============================================================================================
// 9. Array + Conditional
// ============================================================================================
const umur = [15, 20, 17, 25];

for(let nilaiUmur of umur){
    if(nilaiUmur >= 18){
        console.log(nilaiUmur + " Sudah Dewasa");
    };
};


// ============================================================================================ 
// 10. Array Berisi Object
// ============================================================================================
const users = [
    {
        nama : "Azis",
        umur : 29,
    },
    {
        nama : "Cindy",
        umur : 28,
    },
];

console.log(users);

// Mengambil object pertama dalam index array
console.log(users[0]);
console.log(users[1]);


// ============================================================================================== 
// 11. ARRAY + OBJECT + LOOP + CONDITIONAL
// ==============================================================================================

for (let user of users) {
    if (user.umur >= 18){
        console.log(user.nama + " Sudah Dewasa");
    };
};


