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

// --- CONTACT FORM SUBMISSION LOGIC ---
const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Apply loading button style
    result.className = "form-result-badge loading";
    result.innerHTML = "Transmitting message...";

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      
      if (response.status == 200) {
        // Apply success button style
        result.className = "form-result-badge success";
        result.innerHTML = "Message sent successfully!";
      } else {
        // Apply error button style
        result.className = "form-result-badge error";
        result.innerHTML = json.message || "Something went wrong!";
      }
    })
    .catch(error => {
      // Apply error button style
      result.className = "form-result-badge error";
      result.innerHTML = "Network error. Please try again.";
    })
    .then(function() {
      form.reset();
      
      // Hide the badge after 4 seconds
      setTimeout(() => {
        result.className = "form-result-badge";
      }, 4000);
    });
  });
}