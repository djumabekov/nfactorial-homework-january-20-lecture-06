// ### 1. ****[Скрыть элемент по нажатию кнопки](https://learn.javascript.ru/introduction-browser-events#skryt-element-po-nazhatiyu-knopki)****

// Добавьте JavaScript к кнопке `button`, чтобы при нажатии элемент `<div id="text">Remove me</div>` исчезал.

const btn = document.querySelector('#clickBtn');
const txt = document.querySelector('#text');
let isShowTxt = true;
btn.addEventListener('click', () => {
  isShowTxt ? (txt.style.display = 'none') : (txt.style.display = 'block');
  isShowTxt = !isShowTxt;
});
