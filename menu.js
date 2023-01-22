let titleElem = document.querySelector('.title');

titleElem.onclick = function (e) {
  this.parentNode.classList.toggle('open');
};
