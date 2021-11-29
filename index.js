const navBar = document.querySelector(".navBar");
const navLinks = document.querySelector(".nav-links");
const toggleNavLinks = (e) => {
  console.log(e.target.parentElement);
  if (e.target.parentElement.classList.contains("nav-toggle")) {
    navLinks.classList.remove("hide-nav");
  }
  if (e.target.parentElement.classList.contains("nav-close")) {
    navLinks.classList.add("hide-nav");
  }
};
navBar.addEventListener("click", toggleNavLinks);
