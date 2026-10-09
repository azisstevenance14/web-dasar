// 
// ==============================================================
// TIPE DATA JAVASCRIPT 
// ==============================================================
// Tipe data adalah jenis nilia ynag disimpan didalma variabel.
// Contoh :
// "Azis" -> String
// 30 -> Number
// true -> Boolean

// 
// ==============================================================
// 1. STRING
// ==============================================================
// String adalah data berupa teks.
// String ditulis menggunakan :
// "............"
// '............'
// `............`

const nama = "Azis Steven S. Ance";

console.log("Nama saya : " + nama);

// Contoh String lainnya :
const kota = "Gorontalo";
const pekerjaan = "Programmer";

console.log("Kota Asala : " + kota );
console.log("Pekerjaan : " + pekerjaan);


// ===============================================================
// 2. Number
// ===============================================================
// Number adalah data berupa angka.
// Angka tidak menggunakan tanda kutip 

const umur = 30;
const harga = 15000;

console.log(umur);
console.log(harga);

// Bisa juga melakukan perhitungan 

const a = 50;
const b = 50;

console.log(a + b);


// =================================================================
// 3. Boolean
// =================================================================
// Boolean hanya mempunyai dua nilai :
// 1. True 
// 2. False
// Biasanya digunakan untuk melanjutkan kondisi benar atau salah

const sudahBelajar = true;
const sudahMenikah = false;

console.log(sudahBelajar);
console.log(sudahMenikah);


// ==================================================================
// 4. Undefined
// ==================================================================
// Undefined berarti sebuah variabel sudah dibuat tetapi belum memiliki nilai

let alamat;
console.log(alamat)


// ===================================================================
// 5. NULL
// ===================================================================
// Null berarti kita sengaja memberikan nilai kosong kepada sebuah variabel

const dataTambah = null;
console.log(dataTambah);  


// typeof digunakan untuk mengetahui tipe data.
console.log(typeof nama);
console.log(typeof umur);
console.log(typeof sudahBelajar);
console.log(typeof alamat);
console.log(typeof dataTambah);

