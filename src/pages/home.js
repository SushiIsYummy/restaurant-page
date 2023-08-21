function createHomePage() {
  createSectionOne();
  createSectionTwo();
  createReviewSection();
}

function createSectionOne() {
  let content = document.querySelector('#content');

  // let header = document.createElement('div');
  // header.classList.add('header');
  
  let backgroundImgContainer = document.createElement('div');
  backgroundImgContainer.classList.add('background-img-container');

  let overlay = document.createElement('div');
  overlay.classList.add('overlay');

  let overlayPara = document.createElement('p');
  overlayPara.classList.add('overlay-para');
  overlayPara.textContent = `THE BEST SUSHI YOU WILL EVER EXPERIENCE`

  overlay.appendChild(overlayPara);

  let backgroundImg = document.createElement('img');
  backgroundImg.classList.add('background-img');
  backgroundImg.src = '../src/images/sushi-background3.jpg';

  backgroundImgContainer.appendChild(backgroundImg);
  backgroundImgContainer.appendChild(overlay);
  

  content.appendChild(backgroundImgContainer);
}

function createSectionTwo() {
  let content = document.querySelector('#content');

  let sectionTwo = document.createElement('div');
  sectionTwo.classList.add('section-two');

  let sectionTwoRight = document.createElement('div');
  sectionTwoRight.classList.add('section-two-right');

  let sectionTwoPara = document.createElement('p');
  sectionTwoPara.classList.add('section-two-para');
  sectionTwoPara.textContent = `TRY OUT OUR SASHIMI PLATTER`;
  
  let button = document.createElement('button');
  button.classList.add('view-menu-button');
  button.textContent = 'VIEW MENU';

  sectionTwoRight.appendChild(sectionTwoPara);
  sectionTwoRight.appendChild(button);

  let sashimiPlatterImg = document.createElement('img');
  sashimiPlatterImg.classList.add('sashimi-platter-img');
  sashimiPlatterImg.src = '../src/images/sashimi-platter.jpg';

  sectionTwo.appendChild(sashimiPlatterImg);
  sectionTwo.appendChild(sectionTwoRight);
  content.appendChild(sectionTwo);

}

function createReviewSection() {
  let content = document.querySelector('#content');

  let reviewSection = document.createElement('div');

  let reviewPara = document.createElement('p');
  reviewPara.classList.add('review-para');
  // reviewPara.textContent = `The sushi here is extremely good!`

  let reviewAuthor = document.createElement('p');
  reviewAuthor.classList.add('review-author');

  reviewSection.appendChild(reviewPara);
  reviewSection.appendChild(reviewAuthor);


  content.appendChild(reviewSection);
}

export default createHomePage;