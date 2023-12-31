import createFooter from "./footer";
import contactBackgroundImg from '../images/contact-img.jpg';

function createContactPage() {
  let content = document.querySelector('#content');

  let contactPageContainer = document.createElement('div');
  contactPageContainer.classList.add('contact-page-container');

  
  contactPageContainer.appendChild(createcontactHeader());
  contactPageContainer.appendChild(createContactInfoSection());
  contactPageContainer.appendChild(createFooter(true));

  content.appendChild(contactPageContainer);

  // keep contact info grid at max width until screen is less than max width
  changeContactInfoMargin();
  window.addEventListener('resize', changeContactInfoMargin);
  
  // keep message input width from going off screen
  changeMessageMaxWidth();
  window.addEventListener('resize', changeMessageMaxWidth);

}

function createcontactHeader() {
  let content = document.querySelector('#content');

  let contactHeaderContainer = document.createElement('div');
  contactHeaderContainer.classList.add('contact-header-container');
  
  let contactHeaderOverlay = document.createElement('div');
  contactHeaderOverlay.classList.add('contact-header-overlay');

  let contactHeaderLabel = document.createElement('p');
  contactHeaderLabel.classList.add('contact-header-label');
  contactHeaderLabel.textContent = 'Contact';

  let contactBackground = document.createElement('img');
  contactBackground.classList.add('contact-background-img');
  contactBackground.src = contactBackgroundImg;

  contactHeaderOverlay.appendChild(contactHeaderLabel);
  contactHeaderContainer.appendChild(contactHeaderOverlay);
  contactHeaderContainer.appendChild(contactBackground);

  return contactHeaderContainer;
}

function createContactInfoSection() {
  let content = document.querySelector('#content');

  let contactInfoGridContainer = document.createElement('div');
  contactInfoGridContainer.classList.add('contact-info-grid-container');

  let contactInfoGrid = document.createElement('div');
  contactInfoGrid.classList.add('contact-info-grid');

  let contactRestaurantInfo = document.createElement('div');
  contactRestaurantInfo.classList.add('contact-restaurant-info');

  let restaurantPhoneNumber = document.createElement('p');
  restaurantPhoneNumber.classList.add('restaurant-phone-number');
  restaurantPhoneNumber.textContent = `(123) 456-7890`;

  let restaurantEmail = document.createElement('p');
  restaurantEmail.classList.add('restaurant-email');
  restaurantEmail.textContent = 'sushiamazing@gmail.com';

  let restaurantAddress = document.createElement('p');
  restaurantAddress.classList.add('restaurant-address');
  restaurantAddress.textContent = '4992 Hakusan Street, Suite A7N';

  let restaurantPostalCode = document.createElement('p');
  restaurantPostalCode.classList.add('restaurant-postal-code');
  restaurantPostalCode.textContent = 'Bunkyo-Ku, Tokyo 112-0001';

  let contactUserInput = document.createElement('div');
  contactUserInput.classList.add('contact-user-input');
  contactUserInput.appendChild(createUserInputForm());

  let contactRestaurantInfoGroup = document.createElement('div');
  contactRestaurantInfoGroup.classList.add('contact-restaurant-info-group');

  let contactRestaurantHours = document.createElement('div');
  contactRestaurantHours.classList.add('contact-restaurant-hours');

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday'];
  
  for (let i = 0; i < days.length; i++) {
    let dayAndHour = document.createElement('div');
    dayAndHour.classList.add('contact-day-and-hour');
    
    let contactDay = document.createElement('p');
    contactDay.classList.add('contact-day');
    contactDay.textContent = days[i];
    
    let contactHour = document.createElement('p');
    contactHour.classList.add('contact-hour');

    if (days[i] === 'Sunday') {
      contactHour.textContent = '1:00AM - 9:00PM';
    } else if (days[i] === 'Friday') {
      contactHour.textContent = '11:30AM - 9:30PM';
    } else if (days[i] === 'Saturday') {
      contactHour.textContent = '12:00AM - 9:30PM';
    } else {
      contactHour.textContent = '11:30AM - 11:00PM';
    }
    
    dayAndHour.append(contactDay, contactHour);
    contactRestaurantHours.append(dayAndHour);
  }
  
  contactRestaurantInfoGroup.appendChild(restaurantPhoneNumber);
  contactRestaurantInfoGroup.appendChild(restaurantEmail);
  contactRestaurantInfoGroup.appendChild(restaurantAddress);
  contactRestaurantInfoGroup.appendChild(restaurantPostalCode);

  contactRestaurantInfo.appendChild(contactRestaurantInfoGroup);
  contactRestaurantInfo.appendChild(contactRestaurantHours)

  contactInfoGrid.appendChild(contactRestaurantInfo);
  contactInfoGrid.appendChild(contactUserInput);

  contactInfoGridContainer.appendChild(contactInfoGrid);

  return contactInfoGridContainer;
}

function createUserInputForm() {
  let form = document.createElement('form');
  form.classList.add('contact-user-form');

  let name = document.createElement('input');
  name.classList.add('input-name');
  name.type = 'text';
  name.placeholder = 'Name';

  let email = document.createElement('input');
  email.classList.add('input-email');
  email.type = 'email';
  email.placeholder = 'Email';

  let phoneNumber = document.createElement('input');
  phoneNumber.classList.add('input-phone-number');
  phoneNumber.type = 'tel';
  phoneNumber.placeholder = 'Phone Number';

  let message = document.createElement('textarea');
  message.classList.add('input-message');
  message.placeholder = 'Message';

  let sendButton = document.createElement('button');
  sendButton.classList.add('send-button');
  sendButton.type = 'button';
  sendButton.textContent = 'Send';

  form.append(name, email, phoneNumber, message, sendButton);

  return form;
}

export default createContactPage;

function changeMessageMaxWidth() {
  let textArea = document.querySelector('.input-message');
  let textAreaPositions = textArea.getBoundingClientRect();
  textArea.style.maxWidth = `calc((100vw - ${textAreaPositions.left}px) - 30px)`;
}

function changeContactInfoMargin() {
  let contactInfoGrid = document.querySelector('.contact-info-grid');
  let contactInfoGridStyles = window.getComputedStyle(contactInfoGrid);
  let margin = (window.innerWidth - parseInt(contactInfoGridStyles.maxWidth))/2;

  if (margin <= 0) {
    contactInfoGrid.style.margin = `0px`;
  } else {
    contactInfoGrid.style.margin = `0 ${margin}px`;
  }
}