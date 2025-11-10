// Basic interactivity: mobile nav, theme toggle, filters, form validation, smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('primary-nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const opened = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });

    // close when a link is clicked (mobile)
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (navList.classList.contains('open')) {
          navList.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Theme toggle (persisted)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme'); // "light" or "dark"
  if (saved === 'light') root.classList.add('light');
  if (themeToggle) {
    const updateButton = () => {
      const isLight = root.classList.contains('light');
      themeToggle.textContent = isLight ? '☀️' : '🌙';
      themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    };
    updateButton();
    themeToggle.addEventListener('click', () => {
      root.classList.toggle('light');
      const isLight = root.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateButton();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Project filters
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('#projects-grid .card');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
          card.style.display = '';
          card.setAttribute('aria-hidden', 'false');
        } else {
          card.style.display = 'none';
          card.setAttribute('aria-hidden', 'true');
        }
      });
    });
  });

  // Simple contact form handling (no backend) - demonstrates validation and feedback
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      // Basic validation
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = '#ffb4a2';
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        status.textContent = 'Please provide a valid email address.';
        status.style.color = '#ffb4a2';
        return;
      }

      // Simulate sending
      status.textContent = 'Sending…';
      status.style.color = '';
      setTimeout(() => {
        status.textContent = 'Thanks! Your message was sent (simulation).';
        status.style.color = '';
        form.reset();
      }, 900);
    });
  }
});
