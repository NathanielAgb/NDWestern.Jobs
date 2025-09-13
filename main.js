// ===== MENU TOGGLE =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ===== SCROLL REVEAL OPTIONS =====
const scrollRevealOption = {
  distance: "60px",   // smoother, longer fly-in
  origin: "bottom",
  duration: 1500,     // slightly faster
  opacity: 0,         // fade-in effect
  easing: "ease-in-out", 
};

// ===== HEADER ANIMATIONS =====
// Title flies in first
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// Subtitle appears smoothly after title
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1200,
});

// Buttons come last with a pop-in effect
ScrollReveal().reveal(".header__container .header__btn", {
  ...scrollRevealOption,
  delay: 2000,
  scale: 0.8,   // slight zoom-in
});

// Social icons reveal one by one
ScrollReveal().reveal(".socials li", {
  ...scrollRevealOption,
  delay: 2500,
  interval: 300,
});
