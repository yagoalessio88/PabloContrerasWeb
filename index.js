//navBar functionality
const navBar = document.querySelector(".navBar");
const navLinks = document.querySelector(".nav-links");
const mainSections = document.querySelector(".main-sections");

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
  if (
    e.target.parentElement.classList.contains("nav-toggle") ||
    e.target.classList.contains("nav-toggle")
  ) {
    showNavLinks();
  } else if (
    e.target.parentElement.classList.contains("nav-close") ||
    e.target.classList.contains("nav-close")
  ) {
    hideNavLinks();
  } else if (e.target.classList.contains("anchor-link")) {
    const id = e.target.dataset.id;
    smoothScrollTo(id);
  } else {
    hideNavLinks();
  }
};

//event listeners for navbar toggle
navBar.addEventListener("click", toggleNavLinks);
mainSections.addEventListener("click", hideNavLinks);
