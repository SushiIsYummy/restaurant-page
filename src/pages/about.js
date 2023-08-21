function createAboutUs() {
  let content = document.querySelector('#content');

  let aboutUsSection = document.createElement('div');
  aboutUsSection.classList.add('about-us-section');

  let aboutUsInfo = document.createElement('div');
  aboutUsInfo.classList.add('about-us-info');

  let aboutUsLabel = document.createElement('p');
  aboutUsLabel.classList.add('about-us-label');
  aboutUsLabel.textContent = 'About Us';

  let aboutUsParagraph = document.createElement('p');
  aboutUsParagraph.classList.add('about-us-para');
  aboutUsParagraph.textContent = 
  `I love sushi and pizza and I wanted people to know how good they are
  so I opened a restaurant that serves sushi and pizza.`

  let aboutUsImage = document.createElement('img');
  aboutUsImage.classList.add('about-us-img');
  aboutUsImage.src = '../src/images/person-making-sushi.jpg';

  let aboutUsImageContainer = document.createElement('div');
  aboutUsImageContainer.classList.add('about-us-img-container');
  aboutUsImageContainer.appendChild(aboutUsImage);

  aboutUsInfo.appendChild(aboutUsLabel);
  aboutUsInfo.appendChild(aboutUsParagraph);
  aboutUsSection.appendChild(aboutUsInfo);
  aboutUsSection.appendChild(aboutUsImageContainer);

  content.appendChild(aboutUsSection);
}

export default createAboutUs;