// ===========================================================
// LOOP Javascript
// ===========================================================
// Loop digunakan untuk mengulang kode
// selama kondisi tertentu masih terpenuhi
// 
// contoh :
// kita ingin mencetak angka 1 sampai 5
//  tanpa Loop :
//  
//  console.log(1);
//  console.log(2);
//  console.log(3);
//  console.log(4);
//  dan seterusnya 
//  
// 
// Bayangkan kalau harus mencetak 1 sampai 1000 
// akan sangat merepotkan 
//  
//  Maka kita menggunakan Loop


// =============================================================
// 1. FOR
// =============================================================
// For adalah salah satu loop yang paling sering digunakan dalam Javascript
// 
// Bentuk dasarnya :
// 
// for (nilaiAwal; kondisi; perubaha){
//   Kondisi yang ingin diulang
// } 
// 

// Contoh
for (let angka = 1; angka <=5; angka++){
    console.log(angka);
}


// ============================================================= 
// 2. WHILE
// =============================================================
// While digunakan untuk mengulang kode selama kondisi bernilai True
// 
// Bentuk while:
// while (kondisi){
//      Kode 
//  }
// 

let nomor = 1;

while (nomor <= 5){
    console.log("Nomor : ", nomor);

    // Menambah nomor sebanyak 1
    nomor++;
};



// ===============================================================
// 3. DO ....... WHILE
// ===============================================================
// do...... while hampir mirip dengan while
// 
// Perbedaannya :
// 
// while :  
//  -> cek kondisi terlebih dahulu 
//  -> baru menjalankan kode
// 
// do ..... while :
// -> jalankan kode terlebih dahulu
// -> baru cek kondisi
// 
// bentuk :
// do {
//  kode 
// } while (kondisi);

// Contoh :

let angkaDO = 1;
do {
    console.log("Angka: ", angkaDO);
    angkaDO++;
}while(angkaDO <= 5);



// ================================================================
// 4. INCREMENT
// ================================================================
//  Increment berarti menambah nilai sebanyak 1.
//  
// Bentuk :
//  angka ++;
// 
// sama seperti 
// angka = angka + 1;

let jumlah = 1 
jumlah++;
jumlah++;
jumlah++;
jumlah++;

console.log(jumlah);


// ==================================================================
// 5. DECREMENT
// ==================================================================
// 
// Decrement berarti mengurangi nilai sebanyak 1
// Bentuk :
// angka--;
// 
// sama seperti :
// angka = angka - 1;

let hitung = 5;
hitung--;
hitung--;
hitung--;

console.log(hitung);


// ===================================================================
// 6. BREAK
// ===================================================================
// Break digunakan untuk menghentikan Loop
// secara langsung.
// 
// Contoh :
// kita ingin mencetak angak 1 sampai 10
// tetapi ingin berhenti ketika angka mencapai 6.
// 
for (let angkaBreak = 1; angkaBreak <= 10; angkaBreak++){
    if(angkaBreak === 5){
        break;
    };
    console.log("Break : ", angkaBreak);
};


// ==================================================================
// 7. CONTINUE
// ==================================================================
// Continue berbeda dengan break
// 
// break - > Menghentikan seluruh Loop
// continue -> Melewati putaran saat ini kemudian lanjut ke putaran berikutnya
// 
// contoh :
// kita ingin mencetak angka 1 sampai 5 tetapi angka 3 di lewati
// 

for (let angkaContinue = 1; angkaContinue <= 5; angkaContinue++){
        if(angkaContinue === 3) {
            continue;
        }

        console.log("Continue : ", angkaContinue);
};


// ================================================================== 
// 8. NESTED LOOP
// ==================================================================
// 
// Nested loop adalah loop didalam loop
// 
// artinya :
// Loop Luar 
//     |
//  Loop Dalam
// 
// Contoh :

for (let luar = 1; luar <= 3; luar++){
    console.log("Loop Luar : ", luar);
    for(let dalam = 1; dalam <= 3; dalam++) {
        console.log("Loop Dalam : ", dalam);
    };
}; 



