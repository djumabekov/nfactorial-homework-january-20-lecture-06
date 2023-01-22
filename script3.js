// ### 3. ****[Добавить кнопку закрытия](https://learn.javascript.ru/introduction-browser-events#dobavit-knopku-zakrytiya)****

// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

// Результат, который должен получится можете [посмотреть по ссылке](https://learn.javascript.ru/task/hide-message).

const messages = document.querySelectorAll('.message');

messages.forEach((message) => {
  const btn = document.createElement('button');
  btn.style.marginLeft = '10px';
  btn.className = 'closeBtn';
  btn.textContent = 'Close';
  message.append(btn);
});

const closeBtns = document.querySelectorAll('.closeBtn');

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
  });
});
