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
  menuImg.src = '../src/images/menu-img.jpg'

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

  let menuList = ['ahi', 'aji', 'ebi', 'hamachi', 'hokkigai', 'hotate',
  'ika', 'katsuo', 'maguro', 'saba', 'sake', 'sanma', 'sashimi-platter', 
  'tai' , 'tako'];

  let menuListContainer = document.createElement('div');
  menuListContainer.classList.add('menu-list-container');

  let menuHeaderContainer = document.createElement('div');
  menuHeaderContainer.classList.add('menu-header-container');

  let menuHeader = document.createElement('p');
  menuHeader.classList.add('menu-header');
  menuHeader.textContent = 'SASHIMI';

  let menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  for (let i = 0; i < menuList.length; i++) {
    let menuItem = document.createElement('div');
    let itemImg = document.createElement('img');

    let itemName = document.createElement('p');
    itemName.classList.add('menu-item-name');
    itemName.textContent = menuList[i].replace(/-/g, ' ').toUpperCase();

    let itemPrice = document.createElement('p');
    itemPrice.classList.add('menu-item-price');

    if (menuList[i] === 'sashimi-platter') {
      itemPrice.textContent = '$40.00';
    } else {
      itemPrice.textContent = '$4.00';
    }

    let nameAndPrice = document.createElement('div');
    nameAndPrice.classList.add('name-and-price');

    nameAndPrice.appendChild(itemName);
    nameAndPrice.appendChild(itemPrice);

    itemImg.classList.add('menu-item-img');
    itemImg.src = `../src/images/sashimi/${menuList[i]}-sashimi.jpg`;

    menuItem.appendChild(itemImg);
    menuItem.appendChild(nameAndPrice);
    menuItem.classList.add('menu-item');

    menuGrid.appendChild(menuItem);
  }

  menuHeaderContainer.appendChild(menuHeader);
  menuListContainer.appendChild(menuHeaderContainer);
  menuListContainer.appendChild(menuGrid);
  content.appendChild(menuListContainer);


}

export default createMenu;

