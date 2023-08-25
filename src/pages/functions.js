export default function removeAllButHeader() {
  let content = document.querySelector('#content');

  while (content.childElementCount > 1) {
    content.removeChild(content.lastChild);
  }
}
