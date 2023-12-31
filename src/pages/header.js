function createHeader() {
  let content = document.querySelector('#content');

  let header = document.createElement('div');
  header.classList.add('header');

  let restaurantName = document.createElement('a');
  restaurantName.classList.add('restaurant-branding');
  restaurantName.textContent = 'SushiAmazing';
  restaurantName.href = '#';

  let navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  let navItemsList = ['home', 'about', 'menu', 'contact'];
  let navItems = document.createElement('ul');
  navItems.classList.add('nav-menu');
  
  
  for (let i = 0; i < navItemsList.length; i++) {
    let navLink = document.createElement('a');
    navLink.href = '#';
    navLink.classList.add('nav-link');
    navLink.textContent = navItemsList[i].toUpperCase();
    
    let navItem = document.createElement('li');
    navItem.classList.add(navItemsList[i] + '-nav');
    navItem.classList.add('nav-item');
    
    navItem.appendChild(navLink);
    navItems.appendChild(navItem);
    
  }

  let hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  
  for (let i = 0; i < 3; i++) {
    let span = document.createElement('span');
    span.classList.add('bar');
    hamburger.appendChild(span);
  }

  navbar.appendChild(restaurantName);
  navbar.appendChild(navItems);
  navbar.appendChild(hamburger);
  header.appendChild(navbar);
  header.appendChild(navbar);
  content.appendChild(header);

  addHamburgerFunctionality();
  addActiveToTabs();
  
}

function addHamburgerFunctionality() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  })

  document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  })
}

function addActiveToTabs() {
  let navLinks = document.querySelectorAll('.nav-link');
  let navMenu = document.querySelector('.nav-menu');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(link2 => {
        link2.classList.remove('active');
      })

      e.target.classList.add('active');
    })
  })

  let restaurantBrandingLink = document.querySelector('.restaurant-branding');
  
  restaurantBrandingLink.addEventListener('click', () => {
    let homeLink = document.querySelector('.home-nav a');

    navLinks.forEach(link => {
      link.classList.remove('active');
    })

    homeLink.classList.add('active');

    // remove navMenu (if opened) when restaurant branding is clicked
    navMenu.classList.remove('active');
  });
}


export default createHeader;