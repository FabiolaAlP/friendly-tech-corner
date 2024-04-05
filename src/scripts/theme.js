const menuBtn = document.getElementById("toggleMenu");
const menu = document.getElementById("mobileMenu");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

const mobileMenuHandler = () => {
  menu.classList.toggle("hidden");
};
const handleScroll = () => {
  if (window.scrollY >= 300) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
menuBtn.addEventListener("click", mobileMenuHandler);
window.addEventListener("scroll", handleScroll);
scrollToTopBtn.addEventListener("click", scrollToTop);
