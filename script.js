const html = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const revealItems = document.querySelectorAll(".reveal");

const setTheme = (theme) => {
  html.setAttribute("data-theme", theme);
};

const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(preferredDark ? "dark" : "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));