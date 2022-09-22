let counterValue = 0;

const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action = "decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', onButtonDecrementClick);
increment.addEventListener('click', onButtonIncrementClick);

function onButtonDecrementClick() {
 counterValue -= 1;
    return value.textContent = counterValue
}

function onButtonIncrementClick() {
    counterValue += 1;
    return value.textContent = counterValue
}

