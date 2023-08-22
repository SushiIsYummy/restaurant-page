function createMenu() {
  createMenuImageSection();
  createMenuFoodSection();
}

function createMenuImageSection() {
  let content = document.querySelector('#content');

  let menuImgContainer = document.createElement('div');
  menuImgContainer.classList.add('menu-img-container');

  let menuImg = document.createElement('img');
  menuImg.classList.add('menu-img');
  menuImg.src = '../src/images/menu-img2.jpg'

  let menuImgOverlay = document.createElement('div');
  menuImgOverlay.classList.add('menu-img-overlay');

  let menuImgPara = document.createElement('p');
  menuImgPara.classList.add('menu-img-para');
  menuImgPara.textContent = 'OUR MENU';

  menuImgOverlay.appendChild(menuImgPara);
  menuImgContainer.appendChild(menuImg);
  menuImgContainer.appendChild(menuImgOverlay);
  content.appendChild(menuImgContainer);
}

function createMenuFoodSection() {
  let content = document.querySelector('#content');

  let menuList = ['sashimi platter', 'sashimi platter', 'sashimi platter', 
  'sashimi platter'];

  let menuHeaderContainer = document.createElement('div');
  menuHeaderContainer.classList.add('menu-header-container');

  let menuHeader = document.createElement('p');
  menuHeader.classList.add('menu-header');
  menuHeader.textContent = 'SUSHI';

  let menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  for (let i = 0; i < menuList.length; i++) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuGrid.appendChild(menuItem);
  }

  menuHeaderContainer.appendChild(menuHeader);
  content.appendChild(menuHeaderContainer);
  content.appendChild(menuGrid);
}

export default createMenu;

