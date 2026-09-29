// ======================================================
//HERO SLIDER
// ======================================================

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval;

// ======================================================
// MENAMPILKAN SLIDE
// ======================================================

function showSlide(index) {

    // Hapus active dari semua slide
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    // Hapus active dari semua dot
    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    // Aktifkan slide
    if (slides[index]) {
        slides[index].classList.add("active");
    }

    // Aktifkan dot
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

// ======================================================
// SLIDE BERIKUTNYA
// ======================================================

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
    
}

// ======================================================
// SLIDER OTOMATIS
// ======================================================

function startSlider() {

    clearInterval(slideInterval);

    slideInterval = setInterval(() => {

        nextSlide();

    }, 5000);
}

// ======================================================
// DOT SLIDER
// ======================================================


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;
        showSlide(currentSlide);

        startSlider();

    });

});

// Tampilkan slide pertama
if (slides.length > 0) {

    showSlide(0);

    startSlider();

}

// =========================
// FORM PEMESANAN → WHATSAPP
// =========================

const nomorWhatsApp = "6281319599495";

const formPemesanan = document.querySelector(".pemesanan form");

if (formPemesanan) {
    formPemesanan.addEventListener("submit", function(event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const telepon = document.getElementById("telepon").value;
        const pesan = document.getElementById("pesan").value;

        const isiPesan =
            "Halo, saya ingin mendapatkan informasi produk.\n\n" +
            "Nama: " + nama + "\n" +
            "Email: " + email + "\n" +
            "Telepon: " + telepon + "\n\n" +
            "Pesan:\n" + pesan;

        const urlWhatsApp =
            "https://wa.me/" + nomorWhatsApp +
            "?text=" + encodeURIComponent(isiPesan);

        window.open(urlWhatsApp, "_blank");

    });
}

// =========================
// FORM PEMESANAN
// =========================

const formPemesananSection =
    document.getElementById("pemesanan");


// =========================
// TOMBOL KELUAR
// =========================

const btnKeluar =
    document.getElementById("btnKeluar");

if (btnKeluar && formPemesananSection) {

    btnKeluar.addEventListener("click", function() {

        formPemesananSection.style.display = "none";

        const beranda =
            document.getElementById("beranda");

        if (beranda) {

            beranda.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

}


// =========================
// TOMBOL GET QUOTE
// =========================

const btnQuote =
    document.getElementById("btnQuote");

if (btnQuote && formPemesananSection) {

    btnQuote.addEventListener("click", function(event) {

        event.preventDefault();

        // Tampilkan Form Pemesanan
        formPemesananSection.style.display = "block";

        // Scroll menuju Form Pemesanan
        formPemesananSection.scrollIntoView({
            behavior: "smooth"
        });

    });
}


// =========================
// MENU PRODUK
// =========================

const produkMenus =
    document.querySelectorAll(".produk-menu");

const produkItems =
    document.querySelectorAll(".produk-item");


produkMenus.forEach(function(menu) {

    menu.addEventListener("click", function(event) {

        event.preventDefault();

        // Ambil nama produk
        const productName =
            this.getAttribute("data-product");

        // Hapus active dari semua menu
        produkMenus.forEach(function(item) {
            item.classList.remove("active");
        });

        // Aktifkan menu yang dipilih
        this.classList.add("active");

        // Sembunyikan semua produk
        produkItems.forEach(function(item) {
            item.classList.remove("active");
        });

        // Cari produk yang dipilih
        const selectedProduct =
            document.getElementById(
                "product-" + productName
            );

        // Tampilkan produk
        if (selectedProduct) {
            selectedProduct.classList.add("active");
        }

    });

});

// WHATSAPP CHAT WIDGET

const chatButton = document.getElementById("chatButton");

const chatBox = document.getElementById("chatBox");

const chatClose = document.getElementById("chatClose");

const chatSend = document.getElementById("chatSend");

const chatMessage = document.getElementById("chatMessage");

const chatOptions = document.querySelectorAll(".chat-options button");

const nomorWhatsAppChat = "6281319599495";


// BUKA CHAT

if (chatButton && chatBox) {

    chatButton.addEventListener("click", function() {

        chatBox.classList.toggle("active");

    });

}


// TUTUP CHAT

if (chatClose && chatBox) {

    chatClose.addEventListener("click", function() {

        chatBox.classList.remove("active");

    });

}


// PILIHAN CEPAT

chatOptions.forEach(function(button) {

    button.addEventListener("click", function() {

        const message = this.getAttribute("data-message");

        const urlWhatsApp =
            "https://wa.me/" +
            nomorWhatsAppChat +
            "?text=" +
            encodeURIComponent(message);

        window.open(urlWhatsApp, "_blank");

    });

});


// KIRIM PESAN

if (chatSend && chatMessage) {

    chatSend.addEventListener("click", function() {

        const message = chatMessage.value.trim();

        if (message === "") {

            alert("Silakan tulis pesan terlebih dahulu.");

            return;

        }

        const urlWhatsApp =
            "https://wa.me/" +
            nomorWhatsAppChat +
            "?text=" +
            encodeURIComponent(message);

        window.open(urlWhatsApp, "_blank");

        chatMessage.value = "";

    });

}


// ENTER UNTUK KIRIM

if (chatMessage) {

    chatMessage.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            if (chatSend) {

                chatSend.click();

            }

        }

    });

}
