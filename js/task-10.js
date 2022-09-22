function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBoxEl = document.querySelector('data-create');
const destroyEl = document.querySelector('data-destroy');


let amounts = inputEl.value;
console.log(amounts);
inputEl.addEventListener('blur', onValueTotalBoxes);
// createBoxEl.addEventListener('click', onCreateBoxClick);


function onValueTotalBoxes(e) {
  const totalBoxes = inputEl.value;
  inputEl.dataset.add.value = inputEl.value;
  return totalBoxes
}
 


// console.log(onValueTotalBoxes(e));
 
// function onCreateBoxClick(e) {
//   console.log(inputEl.currentTarget.value)
// }