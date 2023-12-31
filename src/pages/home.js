import backgroundImg from '../images/sushi-background.jpg';
import sashimiPlatterImg from '../images/sashimi/sashimi-platter-sashimi.jpg';
import aLotOfSushi from '../images/a-lot-of-sushi.jpg';

function createHomePage() {
  let content = document.querySelector('#content');
  let nonBackgroundImgContainer = document.createElement('div');
  nonBackgroundImgContainer.classList.add('non-background-img-container');

  createBackgroundImage();

  nonBackgroundImgContainer.appendChild(createFeaturedDishSection());
  nonBackgroundImgContainer.appendChild(createSushiShowcaseSection());
  nonBackgroundImgContainer.appendChild(createReviewSection());

  content.appendChild(nonBackgroundImgContainer);
}

function createBackgroundImage() {
  let content = document.querySelector('#content');
  
  let backgroundImgContainer = document.createElement('div');
  backgroundImgContainer.classList.add('background-img-container');

  let overlay = document.createElement('div');
  overlay.classList.add('overlay');

  let overlayPara = document.createElement('p');
  overlayPara.classList.add('overlay-para');
  overlayPara.textContent = `THE BEST SUSHI YOU WILL EVER EXPERIENCE`;

  overlay.appendChild(overlayPara);

  let background = document.createElement('img');
  background.classList.add('background-img');
  background.src = backgroundImg;

  backgroundImgContainer.appendChild(background);
  backgroundImgContainer.appendChild(overlay);
  
  content.appendChild(backgroundImgContainer);
}

function createFeaturedDishSection() {
  let content = document.querySelector('#content');

  let featuredDishSection = document.createElement('div');
  featuredDishSection.classList.add('featured-dish');

  let featuredDishRight = document.createElement('div');
  featuredDishRight.classList.add('featured-dish-right');

  let featuredDishPara = document.createElement('p');
  featuredDishPara.classList.add('featured-dish-para');
  featuredDishPara.textContent = `TRY OUT OUR SASHIMI PLATTER`;
  
  let orderNowButton = document.createElement('button');
  orderNowButton.classList.add('order-now-button');
  orderNowButton.textContent = 'ORDER NOW';

  featuredDishRight.appendChild(featuredDishPara);
  featuredDishRight.appendChild(orderNowButton);

  let sashimiPlatter = document.createElement('img');
  sashimiPlatter.classList.add('sashimi-platter-img');
  sashimiPlatter.src = sashimiPlatterImg;

  featuredDishSection.appendChild(sashimiPlatter);
  featuredDishSection.appendChild(featuredDishRight);

  return featuredDishSection;

}

function createSushiShowcaseSection() {
  let content = document.querySelector('#content');

  let sushiShowcaseSection = document.createElement('div');
  sushiShowcaseSection.classList.add('sushi-showcase');

  let sushiShowcaseLeft = document.createElement('div');
  sushiShowcaseLeft.classList.add('sushi-showcase-left');

  let sushiShowcasePara = document.createElement('p');
  sushiShowcasePara.classList.add('sushi-showcase-para');
  sushiShowcasePara.textContent = `EXPLORE OUR SUSHI SELECTION`;
  
  let viewMenuButton = document.createElement('button');
  viewMenuButton.classList.add('view-menu-button');
  viewMenuButton.textContent = 'VIEW MENU';

  sushiShowcaseLeft.appendChild(sushiShowcasePara);
  sushiShowcaseLeft.appendChild(viewMenuButton);

  let sushiShowcase = document.createElement('img');
  sushiShowcase.classList.add('sushi-showcase-img');
  sushiShowcase.src = aLotOfSushi;

  sushiShowcaseSection.appendChild(sushiShowcaseLeft);
  sushiShowcaseSection.appendChild(sushiShowcase);

  return sushiShowcaseSection;
}


function createReviewSection() {
  let content = document.querySelector('#content');

  let reviewSection = document.createElement('div');
  reviewSection.classList.add('review-section');

  let reviewPara = document.createElement('p');
  reviewPara.classList.add('review-para');
  reviewPara.textContent = 
  `"The food I ate here was mediocre. There isn't even any sushi or other
  dishes, just sashimi. Staff was rude and the sashimi platter is way
  too expensive. Never eating here again."`.toUpperCase();

  let reviewAuthor = document.createElement('p');
  reviewAuthor.classList.add('review-author');
  reviewAuthor.textContent = `- Customer`;

  reviewSection.appendChild(reviewPara);
  reviewSection.appendChild(reviewAuthor);

  return reviewSection;
}

export default createHomePage;