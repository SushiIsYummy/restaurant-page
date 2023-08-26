import './pages/header';
import './styles/global.css';
import './styles/home.css';
import './styles/header.css';
import './styles/about.css';
import './styles/menu.css';
import './styles/contact.css';
import './styles/footer.css';
import removeAllButHeader from './pages/functions';
import createHeader from './pages/header';
import createAboutUs from './pages/about';
import createHomePage from './pages/home';
import createMenu from './pages/menu';
import createContactPage from './pages/contact';
import createFooter from './pages/footer';

// on first load
createHeader();
createHomePage();
createFooter();
activateViewMenuButton();

let restaurantBrandingLink = document.querySelector('.restaurant-branding');
let homeLink  = document.querySelector('.home-nav a');
let aboutLink  = document.querySelector('.about-nav a');
let menuLink  = document.querySelector('.menu-nav a');
let contactLink  = document.querySelector('.contact-nav a');
homeLink.classList.add('active');

restaurantBrandingLink.addEventListener('click', () => {
  removeAllButHeader();
  createHomePage();
  createFooter();
  activateViewMenuButton();
});

homeLink.addEventListener('click', () => {
  removeAllButHeader();
  createHomePage();
  createFooter();
  activateViewMenuButton();
});

aboutLink.addEventListener('click', () => {
  removeAllButHeader();
  createAboutUs();
  createFooter();
})

menuLink.addEventListener('click', () => {
  removeAllButHeader();
  createMenu();
  createFooter();
})

contactLink.addEventListener('click', () => {
  removeAllButHeader();
  createContactPage();
})

function activateViewMenuButton() {
  let viewMenuButton = document.querySelector('.view-menu-button');

  viewMenuButton.addEventListener('click', () => {
    let navLinks = document.querySelectorAll('.nav-link');
    let menuLink = document.querySelector('.menu-nav a');
    navLinks.forEach(link => {
      link.classList.remove('active');
    })
    menuLink.classList.add('active');
    removeAllButHeader();
    createMenu();
    createFooter();

    // view page starting at the top
    window.scrollTo(0, 0);
  });
}