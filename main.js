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

// ===== SCROLL REVEAL BASE OPTIONS =====
const baseOption = {
  distance: "80px",
  duration: 1500,
  opacity: 0,
  easing: "ease-in-out",
};

// ===== HEADER ANIMATIONS =====
// Title flies in from LEFT
ScrollReveal().reveal(".header__container h1", {
  ...baseOption,
  origin: "left",
  delay: 500,
});

// Subtitle flies in from RIGHT
ScrollReveal().reveal(".header__container p", {
  ...baseOption,
  origin: "right",
  delay: 1200,
});

// Buttons fade+zoom last
ScrollReveal().reveal(".header__container .header__btn", {
  ...baseOption,
  origin: "bottom",
  delay: 2000,
  scale: 0.85, // pop effect
});

// Social icons fade up one by one
ScrollReveal().reveal(".socials li", {
  ...baseOption,
  origin: "bottom",
  delay: 2500,
  interval: 300,
});
