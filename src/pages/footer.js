function createFooter(returnFooter) {
  let content = document.querySelector('#content');

  let footer = document.createElement('div');
  footer.classList.add('footer');

  let copyright = document.createElement('p');
  copyright.classList.add('copyright-message');
  copyright.textContent = '© 1998-2023 SushiAmazing | All Rights Reserved';

  footer.appendChild(copyright);

  if (returnFooter) {
    return footer; 
  }

  content.appendChild(footer);
}

export default createFooter;