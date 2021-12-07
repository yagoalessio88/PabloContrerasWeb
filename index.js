import { shortBio, longBio, shortAlbum, longAlbum } from "./js/data.js";
//navBar functionality
const navBar = document.querySelector(".navBar");
const navLinks = document.querySelector(".nav-links");
const mainSections = document.querySelector(".main-sections");
const heroSection = document.querySelector(".main-hero");

const showNavLinks = () => {
  navLinks.classList.remove("hide-nav");
};

const hideNavLinks = () => {
  navLinks.classList.add("hide-nav");
};
///smooth scroll function
const smoothScrollTo = (id) => {
  const fixedNavbarHeight = document.querySelector(".nav-center").clientHeight;
  const targetedSection = document.getElementById(id);
  let position = targetedSection.offsetTop - fixedNavbarHeight;
  hideNavLinks();
  window.scrollTo({
    left: 0,
    top: position,
    behavior: "smooth",
  });
};
/////nav links toggle
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
heroSection.addEventListener("click", hideNavLinks);
mainSections.addEventListener("click", hideNavLinks);

///////////////////////////////////////////////////////////////////////////////////
//text functionality

const bioTextContainer = document.querySelector(".bio-text-container");
const albumTextContainer = document.querySelector(".album-text-container");

///// text toggle functions
//bio section
const longBioText = () => {
  bioTextContainer.innerHTML = longBio;
};
const shortBioText = () => {
  bioTextContainer.innerHTML = shortBio;
};
//albu section
const longAlbumText = () => {
  albumTextContainer.innerHTML = longAlbum;
};
const shortAlbumText = () => {
  albumTextContainer.innerHTML = shortAlbum;
};
/////////window content loaded event listener
window.addEventListener("DOMContentLoaded", () => {
  shortBioText();
  shortAlbumText();
});
//////text btn event listeners
bioTextContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("open")) {
    longBioText();
  }
  if (e.target.classList.contains("close")) {
    shortBioText();
    smoothScrollTo(1);
  }
});
albumTextContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("open")) {
    longAlbumText();
  }
  if (e.target.classList.contains("close")) {
    shortAlbumText();
    smoothScrollTo(2);
  }
});
