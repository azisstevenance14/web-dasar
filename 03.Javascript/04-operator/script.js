// ==================================================================
// Operator pada Javascript
// ==================================================================
// Operator adalah simbol yang digunakan untuk melakukan operasi terhadap data.
// 
// contoh :
// 10 + 5
// 
// + adalah Operator


// ==================================================================
// 1. Operator Aritmatika
// ==================================================================
// Operator aritmatika digunakan untuk melakukan perhitungan matematika
// +  -> Penjumlahan 
// -  -> Pengurangan
// *  -> Perkalian 
// /  -> Pembagian
// %  -> Sisa Pembagian

// 1. Penjumlahan
console.log(10 + 5);

// 2. Pengurangan
console.log(10 - 5);

// 3. Perkalian
console.log(10 * 5);

// 4. Pembagian
console.log(10 / 5);

// 5. Sisa pembagian (Modulus)
console.log(10 % 3);


// ===================================================================
// 2. Aritmatika Dengan Variabel
// ===================================================================
const hargaBarang = 50000;
const jumlahBarang = 3;

const totalHarga = hargaBarang + jumlahBarang;

console.log(totalHarga);


// ===================================================================== 
// 3. Operator Assigment
// =====================================================================
// Assigment digunakan untuk memberikan atau mengubah sebuah variabel.
// 
// =   -> Memberikan Nilai


let saldo = 100000;
console.log(saldo);

// Saldo dikurangi 20000
saldo = saldo - 20000;
console.log(saldo);

// Saldo ditambah
saldo = saldo + 50000;
console.log(saldo);


// ======================================================================
// 4. Shortcut Assigment
// ======================================================================
// Javascript menyediakan bentuk singkat :
// saldo += 10000;
// 

saldo += 10000;
console.log(saldo);

// Pengurangan
saldo -= 10000;
console.log(saldo);

// Perkalian 
saldo *= 2;
console.log(saldo);

// Pembagian 
saldo /= 2;
console.log(saldo);


// ========================================================================
// 5. Operator Perbandingan 
// ========================================================================
// Operator perbandingan digunakan untuk membandingkan dua nilai
// hasilnya adalah :
// true atau false
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);

// Sama dengan
console.log(10 === 5);

// Tidak sama dengan
console.log(10 !== 5);


// ========================================================================== 
// 6. Operator Logika
// ==========================================================================
// Operator logika digunakan untuk menggabungkan kondisi 
// 
// && -> AND 
// || -> OR
// !  -> NOT

// AND
console.log(true && true);
console.log(true && false);

// OR
console.log(true || false);
console.log(false || false);

// NOT
console.log(!true);
console.log(!false);