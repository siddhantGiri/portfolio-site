// Theme Toggle Logic
const html = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const revealItems = document.querySelectorAll('.reveal');

// Check system preference
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
html.setAttribute('data-theme', preferredDark ? 'dark' : 'light');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  });
}

// Scroll Reveal Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

revealItems.forEach((item) => observer.observe(item));