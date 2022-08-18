const inputName = document.querySelector('#name');
const inputTel = document.querySelector('#tel');
const hintName = document.querySelector('.order-form__hint-name');
const hintTel = document.querySelector('.order-form__hint-tel');

inputName.addEventListener('focus', () => {
  hintName.classList.add('show');
});
inputName.addEventListener('blur', () => {
  hintName.classList.remove('show');
});
inputTel.addEventListener('focus', () => {
  hintTel.classList.add('show');
});
inputTel.addEventListener('blur', () => {
  hintTel.classList.remove('show');
});
