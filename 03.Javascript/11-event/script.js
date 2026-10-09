// ======================================================
// EVENT JAVASCRIPT
// ======================================================
// 

// ======================================================
// 1. Array Hobbi
// ======================================================
const hobi =[
    "Coding",
    "Belajar Javascript",
    "Bisnis",
];

// ======================================================
// 2. Mengambil Element HTMl
// ======================================================
const tombolHobi = document.getElementById("tombol-hobi");
const daftarHobi = document.getElementById("daftar-hobi");
const pesan = document.createElement("p");


// ======================================================
// 3. Membuat Function
// ======================================================

function tampilkanHobi(cekHobi){
    // ==================================================
    // LOOP
    // ==================================================
    for (let i=0; i < cekHobi.length; i++){

        // ==============================================
        // Conditional
        // ==============================================
        if (cekHobi[i]){
            // ==========================================
            // Membuat Element
            // ==========================================

            const li = document.createElement("li");

            // ==========================================
            // Mengisi Teks pada HTML
            // ==========================================
            li.textContent = cekHobi[i];

            // ==========================================
            // Memasukan <li> ke <ul>
            // ==========================================
            daftarHobi.appendChild(li);
        };
    };

};


// =======================================================
// 4. Event Click
// =======================================================
tombolHobi.addEventListener("click", function(){
    alert ("Silhakan klik!");
    // mengisi element <p>
    pesan.textContent = "My Hobby :"
    
    // memasukan <p> kedalam body
    document.body.appendChild(pesan);
    
    
    tampilkanHobi(hobi);



});