
function createHomePage() {
  let content = document.querySelector('#content');
  let nonBackgroundImgContainer = document.createElement('div');
  nonBackgroundImgContainer.classList.add('non-background-img-container');

  createBackgroundImage();

  createFeaturedDishSection(nonBackgroundImgContainer);
  createSushiShowcaseSection(nonBackgroundImgContainer);
  createReviewSection(nonBackgroundImgContainer);

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

  let backgroundImg = document.createElement('img');
  backgroundImg.classList.add('background-img');
  backgroundImg.src = '../src/images/sushi-background.jpg';

  backgroundImgContainer.appendChild(backgroundImg);
  backgroundImgContainer.appendChild(overlay);
  

  content.appendChild(backgroundImgContainer);
}

function createFeaturedDishSection(contentToAppendTo) {
  let content = document.querySelector('#content');

  let sectionTwo = document.createElement('div');
  sectionTwo.classList.add('section-two');

  let sectionTwoRight = document.createElement('div');
  sectionTwoRight.classList.add('section-two-right');

  let sectionTwoPara = document.createElement('p');
  sectionTwoPara.classList.add('section-two-para');
  sectionTwoPara.textContent = `TRY OUT OUR SASHIMI PLATTER`;
  
  let button = document.createElement('button');
  button.classList.add('order-now-button');
  button.textContent = 'ORDER NOW';

  sectionTwoRight.appendChild(sectionTwoPara);
  sectionTwoRight.appendChild(button);

  let sashimiPlatterImg = document.createElement('img');
  sashimiPlatterImg.classList.add('sashimi-platter-img');
  sashimiPlatterImg.src = '../src/images/sashimi-platter.jpg';

  sectionTwo.appendChild(sashimiPlatterImg);
  sectionTwo.appendChild(sectionTwoRight);
  // content.appendChild(sectionTwo);
  contentToAppendTo.appendChild(sectionTwo);

}

function createSushiShowcaseSection(contentToAppendTo) {
  let content = document.querySelector('#content');

  let sushiShowcaseSection = document.createElement('div');
  sushiShowcaseSection.classList.add('sushi-showcase');

  let sushiShowcaseLeft = document.createElement('div');
  sushiShowcaseLeft.classList.add('sushi-showcase-left');

  let sectionTwoPara = document.createElement('p');
  sectionTwoPara.classList.add('sushi-showcase-para');
  sectionTwoPara.textContent = `EXPLORE OUR SUSHI SELECTION`;
  
  let button = document.createElement('button');
  button.classList.add('view-menu-button');
  button.textContent = 'VIEW MENU';

  sushiShowcaseLeft.appendChild(sectionTwoPara);
  sushiShowcaseLeft.appendChild(button);

  let sashimiPlatterImg = document.createElement('img');
  sashimiPlatterImg.classList.add('sushi-showcase-img');
  sashimiPlatterImg.src = '../src/images/a-lot-of-sushi.jpg';

  sushiShowcaseSection.appendChild(sushiShowcaseLeft);
  sushiShowcaseSection.appendChild(sashimiPlatterImg);
  // content.appendChild(sushiShowcaseSection);
  contentToAppendTo.appendChild(sushiShowcaseSection);
}


function createReviewSection(contentToAppendTo) {
  let content = document.querySelector('#content');

  let reviewSection = document.createElement('div');
  reviewSection.classList.add('review-section');

  let reviewPara = document.createElement('p');
  reviewPara.classList.add('review-para');
  reviewPara.textContent = 
  `"The sushi I ate here was mediocre, not the best I've eaten. There 
  were a variety of sushi so that was nice. Just don't order the sashimi
  platter, it's a scam."`.toUpperCase();

  let reviewAuthor = document.createElement('p');
  reviewAuthor.classList.add('review-author');
  reviewAuthor.textContent = `- Customer`;

  reviewSection.appendChild(reviewPara);
  reviewSection.appendChild(reviewAuthor);


  // content.appendChild(reviewSection);

  contentToAppendTo.appendChild(reviewSection);
}

export default createHomePage;