// 1) Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const itemEl = document.querySelectorAll('.item');
console.log("Number of categories:", itemEl.length);

// 2) Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

itemEl.forEach(element => {
const titleEl = element.firstElementChild;
console.log('Category:', titleEl.textContent);
const Elements = element.lastElementChild.children;
console.log('Elements', Elements.length);  
});



