// Language switching
function setLang(lang) {
  document.body.classList.toggle('lang-it', lang === 'it');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btns = document.querySelectorAll('.lang-btn');
  if (lang === 'en') btns[0].classList.add('active');
  else btns[1].classList.add('active');
  localStorage.setItem('lang', lang);
}

// Restore language on load
(function() {
  const saved = localStorage.getItem('lang');
  if (saved === 'it') {
    document.body.classList.add('lang-it');
    document.addEventListener('DOMContentLoaded', () => {
      const btns = document.querySelectorAll('.lang-btn');
      if (btns.length > 1) { btns[0].classList.remove('active'); btns[1].classList.add('active'); }
    });
  }
})();

// Active nav link
document.addEventListener('DOMContentLoaded', function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
