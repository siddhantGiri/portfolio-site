# IT Support Portfolio | Siddhant Giri

A modern, responsive personal portfolio website designed for an IT Support Technician. This portfolio highlights technical skills, experience, and project work using a clean 2026 UI/UX design approach featuring a "Bento Box" grid layout and Glassmorphism elements.

## 🚀 Features

* **Modern "Bento Grid" UI**: Information is organized into highly scannable, visually engaging cards.
* **Dark & Light Mode Toggle**: Built-in theme switcher that respects the user's system preferences.
* **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
* **Scroll Animations**: Smooth reveal animations as the user scrolls down the page.
* **Functional Contact Form**: Integrated with Web3Forms to send emails directly to my inbox without reloading the page (AJAX/Fetch API) and includes a custom success/error badge.

## 🛠️ Technologies Used

* **HTML5**: Semantic markup and structure.
* **CSS3**: Custom CSS variables, Flexbox, CSS Grid, and Glassmorphism effects (no external frameworks).
* **Vanilla JavaScript**: DOM manipulation, Intersection Observer for scroll animations, and Fetch API for form submission.
* **Web3Forms**: Serverless contact form endpoint.

## 📂 Project Structure

```text
├── index.html   # Main HTML markup
├── style.css    # Styling, variables, and responsive design
├── script.js    # Interactivity, theme toggle, and form submission logic
└── README.md    # Project documentation
```

## 💻 Getting Started

This is a static website, so no build tools or package managers (like npm) are required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. **Open the project:**
   Simply double-click the `index.html` file to open it in your default web browser, or use an extension like VS Code Live Server for hot reloading during development.

## ⚙️ Contact Form Configuration (Web3Forms)

The contact form is fully functional and uses [Web3Forms](https://web3forms.com/). If you are cloning this repo for your own use, you must generate your own access key:

1. Go to Web3Forms and get a free access key.
2. Open `index.html`.
3. Locate the hidden input field inside the `<form id="contact-form">`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```
4. Replace the `value` with your new key.

## 📬 Contact

**Siddhant Giri**  
IT Support Technician | Thunder Bay, ON  
Email: [siddhant.giri12@gmail.com](mailto:siddhant.giri12@gmail.com)