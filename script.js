const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Web sitesi üzerinden ön görüşme talebi');
  const body = encodeURIComponent(
    `Ad / Firma: ${form.get('name')}\nE-posta: ${form.get('email')}\nHizmet: ${form.get('service')}\n\nİhtiyaç: ${form.get('message') || '-'}\n`
  );
  document.getElementById('formStatus').textContent = 'E-posta uygulamanız açılıyor...';
  window.location.href = `mailto:info@verirota.com?subject=${subject}&body=${body}`;
});
