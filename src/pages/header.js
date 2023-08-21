function createHeader() {
  let content = document.querySelector('#content');

  let header = document.createElement('div');
  header.classList.add('header');

  let restaurantName = document.createElement('p');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'SushiPizza';

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

  // let backgroundImg = document.createElement('img');
  // backgroundImg.classList.add('background-img');
  // backgroundImg.src = '../src/images/sushi-background3.jpg';


  // let backgroundImg2 = backgroundImg.cloneNode();
  navbar.appendChild(navItems);
  header.appendChild(restaurantName);
  header.appendChild(navbar);
  // content.appendChild(backgroundImg2);
  // content.appendChild(backgroundImg);
  content.appendChild(header);
}

export default createHeader;