// ================================================
// OBJECT JAVASCRIPT
// ================================================
//  object digunakan untuk menyimpan data yang memiliki :
//  property dan value.

// Contoh : 
// nama - > Azis
// umur -> 29
// kota -> Gorontalo

const user = {
    nama : "Azis",
    umur : 29,
    kota : "Gorontalo",
};

console.log(user);


// ================================================= 
// 1. Property Dan Value
// =================================================
//  { nama : "Azis"}
//      |       |
//   property  value

// contoh :

const orang ={
    nama : "Cindy",
    umur : 28,
    kota : "Gorontalo",
};

console.log(orang);

// ==================================================
// 2. Mengambil data object
// ==================================================

// Kita dapat mengambil value menggunakan nama Property

//cara Pertama - Dot Notion

const manusia ={
    nama : "Azis",
    umur : 28,
};

console.log(manusia.nama);
console.log(manusia.umur);

// ==================================================
// 3. Bracket Notation
// ==================================================

// Selain menggunakan titik kita juga bisa menggunakan []

const pekerjaan ={
    pekerjaan1 : "Petani",
    Pekerjaan2 : "Polisi",
    pekerjaan3 : "Ojol",
}

console.log(pekerjaan["pekerjaan1"]);

// ==================================================
// 4. Mengubah Value Object
// ==================================================


const userData = {
    nama : "Azis",
    umur : 29,
};

console.log(userData);

// mengubah umur

userData.umur = 30;

console.log(userData);


// ===================================================
// 5. Menambahkan Property
// ===================================================

const dataUser = {
    nama : "Cindy",
    umur : 28,
};

console.log(dataUser);

// Menambahkan Property Baru

dataUser.kota = "Gorontalo";
console.log(dataUser);

// ===================================================
// 6. Menghapus Property
// ===================================================
const dataOrang = {
    nama : "Azis",
    umur : 30,
    kota : "Gorontalo",
};

console.log(dataOrang);

// menghapus property kota 

delete dataOrang.kota;
console.log(dataOrang);

// ===================================================
// 7. Object dapat menyimpan berbagai tipe data
// ===================================================
// 

const profile = {
     nama : "Azis",                 //string
     umur :29,                      //Number
     sudahBelajar : true,           //Boolean
     alamat : null,                 //Null
     hobi : ["Coding", "Bisnis"]    //Array
}

console.log(profile);


// ====================================================
// 8. Object didalam Object
// ====================================================
const userLengkap ={
    nama : "Azis",
    umur : 30,

    alamat : {
        kota : "Gorontalo",
        provinsi :"Gorontalo",
    }
};

console.log(userLengkap);

// Mengambil data object didalam object

console.log(userLengkap.alamat.kota);
console.log(userLengkap.alamat.provinsi);


// =====================================================
// 9. Array didalam Object
// =====================================================
const pengguna = {
    nama : "Azis",
    hobi :[
        "Coding",
        "Bisnis",
        "Investasi"
    ]
};

console.log(pengguna);

// Mengambil data array didalam object berdasarkan index

console.log(pengguna.hobi[0]);
console.log(pengguna.hobi[1]);
console.log(pengguna.hobi[2]);

// =====================================================
// 10. Object + Conditional
// =====================================================
const user1 = {
    nama : "Azis",
    umur : 17,
};

if( user1.umur >= 18 ) {
    console.log(user1.nama + " sudah Dewasa");
} else {
    console.log(user1.nama + " belum dewasa");
}


// =====================================================
// 11. Object + Loop
// =====================================================
const users = [
    {
        nama : "Cindy",
        umur : 28,
    },
    {
        nama : "Azis",
        umur : 29,
    }
];

// Mengambil data object user satu persatu

for (let user of users) {
    console.log("Nama saya :", user.nama );
    console.log("Umur Saya : ", user.umur);
};


// ======================================================
// 12. Object + Loop + Conditional
// ======================================================
const anggota = [
    {
        nama : "Cindy",
        umur : 17,
    },
    {
        nama : "Azis",
        umur : 16,
    }
];

// Mengambil data object user satu persatu

for (let user of anggota) {
    if(user.umur >= 18 ){
        console.log(user.nama + " Sudah Dewasa");
    }else{
        console.log(user.nama + " Belum Dewasa")
    }
};


// ======================================================
// 13. Object + Function
// ======================================================

function tampilkanUser(user){
    console.log("Nama:", user.nama);
    console.log("Umur:", user.umur);
}

const data ={
    nama : "Azis",
    umur : 29,
}

tampilkanUser(data);

// =======================================================
// 14. Function + Object + Array + Loop
// =======================================================
const tampil =[
    {
        nama : "Azis",
        umur : 29,
    },
    {
        nama : "Cindy",
        umur : 28,
    },
];

function cekUserDewasa(daftarUser) {
    for(let user of daftarUser){
        if(user.umur >= 18) {

            // Menambhakan property dan value di dalam object
            user.kota = "Gorontalo";
            console.log(user.nama + " sudah dewasa");
            console.log(user.kota + " tempat tinggal");
        }
    }
};

cekUserDewasa(tampil);
