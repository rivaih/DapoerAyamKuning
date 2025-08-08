// ---------- CONFIG ----------
const WA_NUMBER = "6287840404212"; // ganti ke nomor WA kamu (format internasional tanpa +, contoh 62812...)
const DEFAULT_MSG = "Halo, saya mau pesan: ";

// ---------- HAMBURGER MOBILE ----------
const hamburger = document.getElementById('hamburger');
hamburger?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// jika perlu, buat nav-links slide di CSS dengan .open

// ---------- ORDER BUTTONS (WA) ----------
function openWhatsApp(itemName = '') {
  const text = encodeURIComponent(DEFAULT_MSG + itemName);
  const url = `https://wa.me/${WA_NUMBER}?text=${text}`;
  window.open(url, '_blank');
}

document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const item = e.currentTarget.getAttribute('data-item') || '';
    openWhatsApp(item);
  });
});

document.getElementById('orderHero')?.addEventListener('click', (e) => {
  e.preventDefault();
  openWhatsApp();
});
document.getElementById('orderTop')?.addEventListener('click', () => openWhatsApp());

// CONTACT CTA
document.getElementById('orderContact')?.addEventListener('click', () => openWhatsApp());

// ---------- REVEAL ON SCROLL ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// ---------- SMOOTH SCROLL for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
