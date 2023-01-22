// ### 2. ****[Какой обработчик запустится?](https://learn.javascript.ru/introduction-browser-events#kakoy-obrabotchik-zapustitsya)****

// В переменной `button` находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

const button = document.querySelector('#clickBtn2');

button.addEventListener('click', () => alert('1'));
button.removeEventListener('click', () => alert('1'));
button.onclick = () => alert(2);

//при клике сначала сработает listner и будет выведено "1", затем сработает onclick и будет выведено "2"
