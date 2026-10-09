// ========================================================
// CONDITIONAL jAVASCRIPT
// ========================================================
// 
// Conditional digunakan untuk membuat keputusan berdasrkan 
// suatu kondisi.
// Bentuk Paling Dasar : 
// if (kondisi){
//  Kode yang dijalankanjika kondisi benar
// }


// ======================================================== 
//  1. IF
// ========================================================
//

const umur = 20;
if(umur >= 18 ){
    console.log("Kamu sudah dewasa");
}


// =========================================================
// 2. IF...... ELSE
// =========================================================
// If....... else digunakan ketika kita mempunyai dua kemungkinan
// 
// Jika kondisi True -> jalankan if
// Jika Kondisi False -> jalankan else

const saldo = 60000;
const hargaBarang = 30000;

if (saldo >= hargaBarang){
    console.log("Saldo Cukup, kamu bisa membeli barang");
} else{
    console.log("Saldo tidak cukup.");
}


// ==========================================================
// 3. ELSE IF
// ==========================================================
// Else if digunakan ketika kita mempunyai 
// lebih dari dua kemungkinan kondisi
// 
const nilai = 79;

if (nilai >= 90){
    console.loh("Nilai kamu A+");

}else if (nilai >= 80){
    console.log("Nilai kamu A");

}else if (nilai >= 70 ){
    console.log("Nilai kamu B");

}else if (nilai >= 60 ){
    console.log("Nilai kamu C");

}else {
    console.log("Nilai Kamu D");
};

// ============================================================ 
// 4. CONDITIONAL DENGAN OPERATOR PERBANDINGAN
// ============================================================
// Kita bisa menggunakan operator perbandingan yang kita 
// pelajari sebelumnya :
// 
//   > -> Lebih Besar
//   < -> Lebih Kecil
//  >= -> Lebih Besar atau Sama dengan
//  <= -> Lebih kecil atau Sama dengan
// === -> Sama persis
// !== -> tidak sama persis


const umurPengguna = 17;

if (umurPengguna >= 18 ) {
    console.log("boleh membuat akun");
} else {
    console.log("Belum bisa membuat akun");
};

// Contoh menggunakan === (Sama Persis)
const role = "admin";

if(role === "admin"){
    console.log("Selamat datang admin");
};

// =============================================================
// 5. CONDITIONAL DENGAN OPERATOR LOGIKA
// =============================================================
// Kita juga bisa menggabungkan beberapa kondisi.
// 
// && -> DAN
// || -> atau
// ! -> Kebalikan
// 

// Contoh DAN (&&)
const umurUser= 25;
const memilikiKTP = true;

if(umurUser >=17 && memilikiKTP === true){
    console.log("Persyaratan Terpenuhi");
};


// Contoh OR (||)
const hari = "Minggu";

if (hari === "Sabtu" || hari === "Minggu"){
    console.log("Hari Libur");
};


// Contoh NOT (!)

const login = false;

if (!login){
    console.log("silahkan login terlebih dahulu");
};


// ==================================================
// 6. NESTED IF
// ==================================================
// Mested if adalah if yang berada didalam if
// 
// artinya :
// Kita melakukan pengecekan pertama,
// kemudian melakukan pengecekan kedua,
// jika Kondisi pertema terpenuhi

const username = "Azis";
const passwordBenar = true;

if(username === "Azis"){
    console.log("Username ditemukan");
    if(passwordBenar === true){
        console.log("Login Berhasil");
    }else{
        console.log("Password Salah")
    }
} else{
    console.log("Username tidak ditemukan");
};