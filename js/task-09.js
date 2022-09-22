function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColorEl = document.querySelector('.color')

changeColorEl.addEventListener('click', onChangeColorClick);

function onChangeColorClick(event) {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorEl.textContent = `${getRandomHexColor()}`;
}