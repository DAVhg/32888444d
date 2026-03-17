/* 32888444d */

// ---- SCROLL REVEAL ----
const els = document.querySelectorAll('.tile, .collage-cell, .blog-card, .about-image, .about-text');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('vis'), i * 60);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });
els.forEach(el => obs.observe(el));

// ---- FILTER ----
document.querySelectorAll('.ftag').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ftag').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.f;
    document.querySelectorAll('.tile').forEach(t => {
      const show = f === 'all' || t.dataset.tags.includes(f);
      t.style.display = show ? '' : 'none';
      if (show) requestAnimationFrame(() => t.classList.add('vis'));
    });
  });
});

// ---- MOBILE NAV ----
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 48;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
