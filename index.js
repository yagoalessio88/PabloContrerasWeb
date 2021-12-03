//navBar functionality
const navBar = document.querySelector(".navBar");
const navLinks = document.querySelector(".nav-links");

const showNavLinks = () => {
  navLinks.classList.remove("hide-nav");
};

const hideNavLinks = () => {
  navLinks.classList.add("hide-nav");
};

const smoothScrollTo = (id) => {
  const fixedNavbarHeight = document.querySelector(".nav-center").clientHeight;

  const targetedSection = document.getElementById(id);

  let position = targetedSection.offsetTop - fixedNavbarHeight;
  hideNavLinks();
  window.scrollTo({
    left: 0,
    // top: element.offsetTop,
    top: position,
    behavior: "smooth",
  });
};

const toggleNavLinks = (e) => {
  if (e.target.parentElement.classList.contains("nav-toggle")) {
    showNavLinks();
  }
  if (e.target.parentElement.classList.contains("nav-close")) {
    hideNavLinks();
  }
  if (e.target.parentElement.classList.contains("anchor-link")) {
    const id = e.target.parentElement.dataset.id;
    smoothScrollTo(id);
  }
};
navBar.addEventListener("click", toggleNavLinks);
