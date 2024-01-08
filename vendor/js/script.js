var options = {
    strings: ["Hai, Perkenalkan Nama Saya Muhamad Nazar, Saya Adalah Seorang WEB DEVELOPER yang Memiliki Tekad dan Keinginan untuk Mempelajari dan terus memahami tentang pembuatan Suatu Program, Baik itu Website maupun Aplikasi... <br> Selamat Datang di Website Portofolio Saya &#128522; <br> <a href='page2.html' style='text-decoration : none;'>Tekan Disini Untuk Menyalakan Roket <i class='fas fa fa-rocket'></i></a>"],
    typeSpeed: 25, // Kecepatan ketik (ms per karakter)
    backSpeed: 25, // Kecepatan penghapusan (ms per karakter)
    startDelay: 500, // Jeda sebelum mulai mengetik (ms)
    backDelay: 1000, // Jeda sebelum menghapus (ms)
    loop: false, // Mengulang animasi
    showCursor: false, // Menampilkan kursor
};

var typed = new Typed("#welcome-text", options);
