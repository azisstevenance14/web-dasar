// ==================================================================
// FETCH API JAVASCRIPT
// ==================================================================
// 

// ==================================================================
// 1. Data DOM
// ==================================================================

// Mengambil tombol dari HTML berdasrkan id
const tombolData = document.getElementById("tombol-data");

// mengambil <ul> dari HTML berdasarkan id
const daftarKeluarga = document.getElementById("daftar-keluarga");


// ===================================================================
// 2. Function mengambil Data
// ===================================================================
function ambilDataKeluarga(){
    // fetch() digunakan untuk mengambil data
    // dari file atau sumber lain

    fetch("data.json")
    


        // setelah data berhasil ditemukan,
        // kita mendapatkan response 
        .then(function (response){


            // response.json() digunakan untuk 
            // mengubah response menjadi data JSON
            return response.json();
        })

        // setelah JSON berhasil diubah menjadi 
        // data javscript
        .then(function (data){

            // data sekarang berisi array of object
            // kita melakukan perulangan 
            // untuk mengambil data satu per satu
            for (let keluarga of data){
                console.log(keluarga);

                // Membuat element <li> baru
                const li = document.createElement("li");

                // memasukan data keluarga 
                // ke dalam <li>
                li.textContent = 
                 keluarga.nama +
                 " - " +
                 keluarga.umur +
                 " tahun - " +
                 keluarga.pekerjaan;

                //  Memasukan <li> kedalam <ul>
                daftarKeluarga.appendChild(li);
            }
        })

        //jika Terjadi error
        .catch(function (error){
            console.log("Terjadi Error : ", error);
        });
        // 

};

// ==================================================================
// 3. Event
// ==================================================================

// Ketika tombol diklik
tombolData.addEventListener("click", ambilDataKeluarga);