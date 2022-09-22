const inputEL = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEL.addEventListener('input', onInputSave);

function onInputSave(event) {
    if (event.currentTarget.value === '') {
        return outputEl.textContent = 'Anonymous';
    }
    return outputEl.textContent = event.currentTarget.value;
}  

console.log(outputEl);