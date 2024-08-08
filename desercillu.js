class ElementCreator {
  element(type = 'div', textContent = '') {
    const el = document.createElement(type);
    el.textContent = textContent;
    return el;
  }
}

const creator = new ElementCreator();
const newDiv = creator.element('div', 'Hello, world!');
document.body.appendChild(newDiv); // Append the new div to the body
