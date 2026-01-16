// Ambil tombol
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Tampilkan tombol saat pengguna menggulir halaman
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Fungsi untuk menggulir halaman kembali ke atas saat tombol diklik
scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
};





