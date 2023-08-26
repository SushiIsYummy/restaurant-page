import aboutUsImageFile from '../images/about-us-img.jpeg';

function createAboutUs() {
  let content = document.querySelector('#content');

  let aboutUsSection = document.createElement('div');
  aboutUsSection.classList.add('about-us-section');

  let aboutUsInfo = document.createElement('div');
  aboutUsInfo.classList.add('about-us-info');

  let aboutUsLabel = document.createElement('p');
  aboutUsLabel.classList.add('about-us-label');
  aboutUsLabel.textContent = 'About Us';

  let sushiRestaurantHeader = document.createElement('p');
  sushiRestaurantHeader.classList.add('sushi-restaurant-header');
  sushiRestaurantHeader.textContent = 'SushiAmazing';

  let sushiRestaurantPara = document.createElement('p');
  sushiRestaurantPara.classList.add('sushi-restaurant-para');
  sushiRestaurantPara.innerHTML = 
  `Welcome to SushiAmazing, where culinary excellence meets the art of 
  sushi. Our restaurant takes pride in offering an exquisite array of 
  sushi delights, including exclusive creations born right here. With a 
  dedication to quality, every morsel of sushi at SushiAmazing is a 
  testament to our commitment to serving only the finest.

  Indulge in a symphony of flavors as you explore our diverse selection, 
  meticulously prepared by our skilled chefs. From classic favorites to 
  unique creations, each bite is a journey through the world of authentic 
  sushi craftsmanship. Our high standards ensure that every dish is not 
  just a meal, but an experience of pure delight.
  
  At SushiAmazing, we believe that the secret to extraordinary sushi lies 
  in the fusion of top-notch ingredients and the hands of passionate chefs. 
  Our dedication to sourcing the freshest seafood and ingredients ensures 
  that every roll, nigiri, and sashimi is a masterpiece that tantalizes the
  taste buds.
  
  Whether you're a seasoned sushi aficionado or new to the world of Japanese 
  cuisine, SushiAmazing welcomes you to savor the magic of flavors, textures, 
  and aromas that have made us a culinary destination. Join us and embark on a 
  journey of culinary excellence that promises to delight, inspire, and leave 
  you craving for more.`

  let chefOwnerHeader = document.createElement('p');
  chefOwnerHeader.classList.add('chef-owner-header');
  chefOwnerHeader.textContent = 'Chef Owner';

  let chefOwnerPara = document.createElement('p');
  chefOwnerPara.classList.add('chef-owner-para');
  chefOwnerPara.innerHTML = 
  `Hailing from the city of Tokyo, Japan, our Chef 
  Owner's fascination with sushi has been a lifelong affair. From dawn 
  till dusk every day, all his meals would include sushi. Sushi was his
  favourite food and he could not resist it. It was his passion, it was his
  identity.
  
  Beyond being a mere sushi consumer, Chef Owner also wanted to create
  sushi that others can enjoy. At the age of 12, he became an apprentice of the world 
  renowned Chef Master, igniting a culinary journey that would shape his 
  life forever. With determination, he embarked on the path of sushi craftsmanship, 
  honing his skills to perfection.

  His sushi garnered acclaim from friends and family. In receiving all this praise,
  Chef Owner believed his sushi was the key to happiness. He desired to share his 
  sushi with the world, allowing others to experience the happiness only he could
  provide.

  At the age of 20, Chef Owner opened his first sushi restaurant. It was a restaurant 
  that stood as a testament to his dedication and flair, swiftly garnering attention
  for his high quality and delicious sushi. As his sushi restaurant became more
  popular in Japan, people outside of Japan had started to hear about the restaurant. 
  In time, his reach expanded, and he was able to open his sushi restaurants all over 
  the world. Chef Master hopes to make everyone happy with his sushi.`;

  let aboutUsImage = document.createElement('img');
  aboutUsImage.classList.add('about-us-img');
  aboutUsImage.src = aboutUsImageFile;

  let aboutUsImageContainer = document.createElement('div');
  aboutUsImageContainer.classList.add('about-us-img-container');
  aboutUsImageContainer.appendChild(aboutUsImage);

  var br = document.createElement('br');

  aboutUsInfo.appendChild(aboutUsLabel);
  aboutUsInfo.appendChild(sushiRestaurantHeader);
  aboutUsInfo.appendChild(sushiRestaurantPara);
  aboutUsInfo.appendChild(br);
  aboutUsInfo.appendChild(br.cloneNode());
  aboutUsInfo.appendChild(chefOwnerHeader);
  aboutUsInfo.appendChild(chefOwnerPara);
  aboutUsSection.appendChild(aboutUsInfo);
  aboutUsSection.appendChild(aboutUsImageContainer);

  content.appendChild(aboutUsSection);
}

export default createAboutUs;