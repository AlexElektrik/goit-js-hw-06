const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onFontSizeControl);

function onFontSizeControl() {
    return textEl.style.fontSize = `${inputEl.value}px`;
}
 