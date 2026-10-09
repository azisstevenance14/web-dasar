// ====================================================================
// FUNCTION DASAR
// ====================================================================
// Function adalah sekumpulan kode yang kita bungkus menjadi satu tugas
// tertentu, lalu bisa kita panggil ketika dibutuhkan
// 
// 1. Function Dasar
 function sapa(){
    //  kode dalam function
    console.log("Halo, Selamat Pagi");
  };

// Memanggil function
sapa()


// 2. Function Parameter
function tegur(nama){
    console.log("Halo " + nama);
}

// Argument = data yang di kirim ke function
tegur("Azis");


// 3. Function dengan beberapa parameter
function perkenalan(nama, umur){
    console.log("halo " + nama);
    console.log("Umur Saya " + umur);
};

perkenalan("Azis", 29);


// 4. Return
function tambah(a, b){
  return a + b;
};

const hasil = tambah(10, 5);
console.log(hasil);


// 5. Default Parameter
function oke(nama = "Pengguna"){
    console.log("Halo " + nama);
};

oke("Azis");
oke();


// 6. Function + Conditional
function cekUmur(umur){
    if(umur >= 18){
        return "Sudah Dewasa";
    }else{
        return "Belum Dewasa";
    };
};

const umurPasti = cekUmur(17);
console.log(umurPasti);
console.log(cekUmur(20));


// 7. Function + Loop
function tampilkanAngka(){
    for (let angka = 1; angka <= 5; angka++){
        console.log(angka);
    };
};

tampilkanAngka();

// 8. Function + Array
function tampilkanNama(nama){
    for (let orang of nama){
        console.log(orang);
    };
};

const daftarNama = ["Azis", "Cindy", "Bau"];
tampilkanNama(daftarNama);

// 9. Function + Object
function tampilkanUser(user){
    console.log("Nama: ", user.nama);
    console.log("Umur: ", user.umur);
};

const user = {
    nama : "Azis",
    umur : 29,
};
tampilkanUser(user);

// 10. Function + Array + Object + Loop + Conditional
const users = [
    {nama : "Azis", umur : 20},
    {nama : "Cindy", umur : 28},
];

function cekUserDewasa(daftarUser){
    for (let user of daftarUser){
        if (user.umur >= 18){
            console.log(user.nama + " sudah dewasa");
        };
    };
};

cekUserDewasa(users);

// 11. Scope Dasar
// variabel Nama hanya akan bisa digunakan pada function
function test() {
    const nama = "Azis";
    console.log(nama);
};

test();

// 12. Function Expression
const halo = function() {
    console.log("Halo!");
};
// Function disimpan ke dalam variabel halo
halo();


// 13. Arrow Function
const orang = (nama) => {
    console.log("Halo!: ", nama);
};

orang("azis");


