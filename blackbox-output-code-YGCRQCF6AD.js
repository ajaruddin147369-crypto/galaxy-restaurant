// script.js - JavaScript for interactivity

// Smooth scrolling for navigation links (enhances CSS scroll-behavior)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add more JS here, e.g., for animations or form handling
// CTA buttons are handled via HTML links (tel: and #contact)