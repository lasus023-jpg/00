// Akses Elemen Dasar
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    // Ambil Tema Awal dari LocalStorage
    const savedTheme = localStorage.getItem('theme') || 'github-light';
    if (savedTheme === 'github-dark') {
      body.classList.add('dark');
      themeToggle.textContent = '☀️ Mode Terang';
    }

    // Simpan Tema Widget
    let currentTheme = savedTheme;

    // Fungsi untuk Mengganti Tema
    function switchTheme() {
      const commentsSection = document.querySelector('.comments');
      const oldScript = commentsSection.querySelector('script');

      // Toggle antara Tema Gelap/Terang
      if (currentTheme === 'github-light') {
        body.classList.add('dark');
        themeToggle.textContent = '☀️ Mode Terang';

        // Ubah tema Utterances ke github-dark
        currentTheme = 'github-dark';
      } else {
        body.classList.remove('dark');
        themeToggle.textContent = '🌙 Mode Gelap';

        // Ubah tema Utterances ke github-light
        currentTheme = 'github-light';
      }

      // Ganti widget Utteranc.es dengan tema baru
      const newScript = document.createElement('script');
      newScript.src = 'https://utteranc.es/client.js';
      newScript.setAttribute('repo', 'lasus023-jpg/00');
      newScript.setAttribute('issue-term', 'pathname');
      newScript.setAttribute('theme', currentTheme);
      newScript.crossOrigin = 'anonymous';
      newScript.async = true;

      // Simpan Tema ke LocalStorage
      localStorage.setItem('theme', currentTheme);

      // Hapus Skrip Lama dan Tambahkan Skrip Baru
      commentsSection.removeChild(oldScript);
      commentsSection.appendChild(newScript);
    }

    // Tambahkan Event Listener untuk Tombol
    themeToggle.addEventListener('click', switchTheme);
    
     
    
    
    
    
// Accordion 1

const accordionBody = document.querySelector('#collapseSatu .accordion-body');


function tampilkanFileTXT(namaFile) {
  
  fetch(namaFile)
    .then(response => {
      if (!response.ok) {
        throw new Error("File tidak ditemukan atau gagal diambil");
      }
      return response.text(); 
    })
    .then(teks => {
     
      accordionBody.innerHTML = teks;
    })
    .catch(error => {
      
      accordionBody.textContent = `Error: ${error.message}`;
    });
}

tampilkanFileTXT('file1.txt');




// Accordion 2 → accordionBody2, #collapseDua, tampilkanFileTXT2

const accordionBody2 = document.querySelector('#collapseDua .accordion-body');
function tampilkanFileTXT2(namaFile) {  
  fetch(namaFile)
    .then(response => {
      if (!response.ok) {
        throw new Error("File tidak ditemukan atau gagal diambil");
      }
      return response.text(); 
    })
    .then(teks => {
     
      accordionBody2.innerHTML = teks;
    })
    .catch(error => {
      
      accordionBody2.textContent = `Error: ${error.message}`;
    });
}

tampilkanFileTXT2('konten-accordion.txt');
