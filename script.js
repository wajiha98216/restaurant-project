/* ═══════════════════════════════════════
   NOORI FOODS — script.js
   ═══════════════════════════════════════ */

/* ── NAVBAR SCROLL EFFECT ── */
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  
  if (document.body.classList.contains('inner-page')) {
    navbar.style.background = 'rgba(0, 0, 0, 0.70)';
    return;
  }
  
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.70)';
  } else {
    navbar.style.background = 'transparent';
  }
});

window.dispatchEvent(new Event('scroll'));

/* ── 1. HAMBURGER MENU ── */
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('open');
}

/* ── 2. OUR STORY POPUP ── */
function openStoryPopup(e) {
  if (e) e.preventDefault();
  const popup = document.getElementById('storyPopup');
  if (popup) {
    popup.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeStoryPopup(e) {
  const popup = document.getElementById('storyPopup');
  if (!popup) return;
  if (e && e.target !== popup) return;
  popup.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const popup = document.getElementById('storyPopup');
    if (popup) {
      popup.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
});

/* ── 3. MENU LIGHTBOX ── */
function openLightbox(element) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (!lb || !lbImg) return;
  const container = element.closest('.img-container');
  if (container) {
    lbImg.src = container.querySelector('img').src;
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'none';
  document.body.style.overflow = '';
  document.getElementById('lightbox-img').src = '';
}

document.addEventListener('click', function (e) {
  const lb = document.getElementById('lightbox');
  if (lb && e.target === lb) closeLightbox();
});

/* ── 4. TESTIMONIAL SLIDER ── */
let currentReview = 0;
const reviews = document.querySelectorAll('.t-slide');
let autoPlayInterval;

function showReview(index) {
  if (reviews.length === 0) return;
  reviews.forEach(r => r.classList.remove('active'));
  currentReview = (index + reviews.length) % reviews.length;
  reviews[currentReview].classList.add('active');
}

function changeReview(direction) {
  showReview(currentReview + direction);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => changeReview(1), 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

document.addEventListener('DOMContentLoaded', function () {
  if (reviews.length > 0) startAutoPlay();
});
