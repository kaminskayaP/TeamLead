/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
// const swiper = new Swiper('.reviews__slider', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;

/* Функция перелистывания: */
function showSlides(n) {
  /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
  const slides = document.getElementsByClassName('reviews__slider-item');

  /* Проверяем количество слайдов: */
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* Проходим по каждому слайду в цикле for: */
  for (const slide of slides) {
    slide.style.display = 'none';
  }
  /* Делаем элемент блочным: */
  slides[slideIndex - 1].style.display = 'block';
}

showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
  showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
  showSlides(slideIndex = n);
}
