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

//text functionality
window.addEventListener("DOMContentLoaded", () => {
  shortText();
});
const bioTextContainer = document.querySelector(".bio-text-container");

const wholeText = () => {
  bioTextContainer.innerHTML = `<p class="impair-text">
            
El cantautor nacido en Catalunya durante el exilio de su familia, pasó gran parte de su infancia en Barcelona hasta el retorno de sus padres a Mendoza donde descubriría su relación con la música.  <br>
Es hijo de Antonio Contreras, voz de los grupos Canturía y Markama entre otros, se licenció en Música Popular Latinoamericana en la UNCuyo y ha colaborado para músicos como Horacio Gómez, Juampi Dicesare y Analía Garcetti. <br>
También formó parte de los grupos Pinto Ensamble, La Levingston Colmenares y Lamoladora, experiencia musical que lo acercó a la música migrante, el folclore y la trova latinoamericana, influencias que coinciden en su cancionero. <br> <br>

Colaboraciones: <br>
Como Integrante formó parte del Octavio Sánchez Ensamble, el grupo de música brasileña Janela ao sul e integró varias murgas como La Buena Moza y El Remolino entre otras. <br> <br>

Como invitado tocó con agrupaciones como Miles de Años, Parió la Choca, Traful Trío, Pucha Che, El Adagio,Simpecao, Altertango , Grupo de percusión En Clave a Tierra, entre otros. <br> <br>

Grabaciones: <br>
•Murga La Repicante. <br>
•Murga La Buena Moza. <br>
•Álbum "Con aire al sur del mundo" (Simpecao). <br>
•Álbum "Bailalo como quieras" (La Levingston Colmenares). <br> <br>

Hechos Destacados: <br>
•Premio Escenario 2007 y 2010 en el rubro Jazz otorgado por el diario Uno de
Mendoza al Eduardo Pinto Ensamble. <br>
•Gira Uruguay (festival "Jazz a la calle" - enero 2009 y 2011). <br>
•Gira Cuba ("Festival del Fuego" - julio de 2013). <br>
•Pemio "Trajectoria" (setiembre 2013) del 5° Concurso de 
Música Popular Brasileña "Brasil en Mendoza" y posterior viaje de intercambio a la Escuela Ton Jobim de San Pablo, Brasil.<button class="text-toggle-btn close">Leer menos</button>

          </p> `;
};
const shortText = () => {
  bioTextContainer.innerHTML = `<p class="impair-text">
            
El cantautor nacido en Catalunya durante el exilio de su familia, pasó gran parte de su infancia en Barcelona hasta el retorno de sus padres a Mendoza donde descubriría su relación con la música.  <br>
Es hijo de Antonio Contreras, voz de los grupos Canturía y Markama entre otros, se licenció en Música Popular Latinoamericana en la UNCuyo y ha colaborado para músicos como Horacio Gómez, Juampi Dicesare y Analía Garcetti. <button class="text-toggle-btn open">Leer más</button>
          </p> `;
};
bioTextContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("open")) {
    wholeText();
  }
  if (e.target.classList.contains("close")) {
    shortText();
    smoothScrollTo(1);
  }
});
//get div element
//return p.200palabras + button
//compuerta logica para boton
//click return p completo + button
