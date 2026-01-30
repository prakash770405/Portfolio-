// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Typing Effect
const text = "Full Stack Developer || MCA Graduate";
let i = 0;
const typing = document.querySelector(".typing");

function type() {
  if (typing && i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}
if (typing) type();

// Navbar Blur
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Tilt Cards
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `rotateY(${(x - rect.width/2)/15}deg) rotateX(${-(y - rect.height/2)/15}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// Social icons reveal
const socialReveal = document.querySelectorAll(".social-links");
const socialObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.2 });

socialReveal.forEach(el => socialObserver.observe(el));



// Hamburger toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
