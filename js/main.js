// js/main.js — versi bersih & efisien
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    // Efek scrolled untuk navbar
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        });
    }

    // Dropdown toggle (klik)
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const menu = this.nextElementSibling;
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                // Tutup semua dropdown lain
                document.querySelectorAll('.dropdown-menu').forEach(m => {
                    if (m !== menu) m.style.display = 'none';
                });
                menu.style.display = 'block';
            }
        });
    });

    // Tutup dropdown saat klik di luar
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                m.style.display = 'none';
            });
        }
    });
});
    // Tambahkan fungsi ini ke file js/main.js

// Fungsi untuk membuka modal gallery
function openModal(imageSrc, title, description) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.classList.add('active');
    modalImg.src = imageSrc;
    modalCaption.innerHTML = `<strong>${title}</strong><br>${description}`;
    
    // Disable body scroll saat modal terbuka
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal gallery
function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    
    // Enable body scroll kembali
    document.body.style.overflow = 'auto';
}

// Tutup modal dengan tombol ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Animasi counter untuk statistik (opsional)
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString('id-ID');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('id-ID');
        }
    }, 20);
}

// Jalankan animasi counter saat scroll ke section statistik
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValues = entry.target.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
                const value = parseFloat(stat.textContent.replace(/[^\d.]/g, ''));
                if (!stat.classList.contains('animated')) {
                    animateCounter(stat, value);
                    stat.classList.add('animated');
                }
            });
        }
    });
}, observerOptions);

// Observe statistics section
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.statistics-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});