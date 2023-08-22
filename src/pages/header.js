function createHeader() {
  let content = document.querySelector('#content');

  let header = document.createElement('div');
  header.classList.add('header');

  let restaurantName = document.createElement('p');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'SushiAmazing';

  let navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  let navItemsList = ['home', 'about', 'menu', 'contact'];
  let navItems = document.createElement('ul');

  for (let i = 0; i < navItemsList.length; i++) {
    let navItem = document.createElement('li');
    navItem.classList.add(navItemsList[i]);
    navItem.textContent = navItemsList[i].toUpperCase();
    navItems.appendChild(navItem);
  }
  navbar.appendChild(navItems);
  header.appendChild(restaurantName);
  header.appendChild(navbar);
  content.appendChild(header);
}

export default createHeader;