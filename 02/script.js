
//<script>
// Target elemen accordion-body dari Accordion Item #3
const accordionBody = document.querySelector('#collapseOne .accordion-body');

// Fungsi untuk mengambil dan menampilkan file TXT
function tampilkanFileTXT(namaFile) {
  // Gunakan Fetch API untuk mengambil file
  fetch(namaFile)
    .then(response => {
      if (!response.ok) {
        throw new Error("File tidak ditemukan atau gagal diambil");
      }
      return response.text(); // Ubah respons menjadi teks
    })
    .then(teks => {
      // Masukkan teks ke dalam accordion-body
      // Jika ingin tetap menggunakan escape tanda kutip di TXT, tidak perlu ubah apa-apa
      accordionBody.innerHTML = teks;
    })
    .catch(error => {
      // Tampilkan pesan error jika ada masalah
      accordionBody.textContent = `Error: ${error.message}`;
    });
}

// Panggil fungsi dengan nama file TXTmu
//tampilkanFileTXT('contoh1.txt');
//</script>






//<script>
// Target elemen accordion-body dari Accordion Item #3
const accordionBody = document.querySelector('#collapseTwo .accordion-body');

// Fungsi untuk mengambil dan menampilkan file TXT
function tampilkanFileTXT(namaFile) {
  // Gunakan Fetch API untuk mengambil file
  fetch(namaFile)
    .then(response => {
      if (!response.ok) {
        throw new Error("File tidak ditemukan atau gagal diambil");
      }
      return response.text(); // Ubah respons menjadi teks
    })
    .then(teks => {
      // Masukkan teks ke dalam accordion-body
      // Jika ingin tetap menggunakan escape tanda kutip di TXT, tidak perlu ubah apa-apa
      accordionBody.innerHTML = teks;
    })
    .catch(error => {
      // Tampilkan pesan error jika ada masalah
      accordionBody.textContent = `Error: ${error.message}`;
    });
}

// Panggil fungsi dengan nama file TXTmu
//tampilkanFileTXT('contoh2.txt');
//</script>


