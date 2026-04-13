// ── Shared cart state ──────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('hq_cart') || '[]');

function saveCart() { localStorage.setItem('hq_cart', JSON.stringify(cart)); }

function addToCart(id, name, price, emoji) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, name, price, emoji, qty: 1 });
  saveCart();
  updateCartBadge();
  showToast('🛒 Added to cart!');
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = total;
    b.style.display = total > 0 ? 'flex' : 'none';
  });
}

function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast toast-' + type;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
