const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onLengthControl);



function onLengthControl(event) {
    if (event.currentTarget.value.split('').length === 6) {
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');
    }
    inputEl.classList.remove('valid');
    return inputEl.classList.add('invalid');
}


