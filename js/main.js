
// SWIPER HERO

const swiper = new Swiper('.hero__right-swiper', {
  allowTouchMove: false,
  loop: true,
  speed: 600,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//BURGER MENU

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#menu-button').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

// COMPLEX 

document.querySelector('.marquee').addEventListener('click', function () {
  window.open('https://dwweb.ru/', '_blank')
});

// COMPLEX TIPPY

tippy('.tooltip-1', {
  theme: 'projects',
  content: 'Пример современных тенденций - современная методология разработки',
});

//SWIPER PRODUCTION 

const productionSwiper = new Swiper('.production__swiper', {
  allowTouchMove: false,
  initialSlide: 1,
  navigation: {
    nextEl: '.production-button-next',
    prevEl: '.production-button-prev',
  },
});

//PRODUCTION MODAL

const modal = document.querySelector('.production__modal')
const modalClose = document.querySelector('.modal__close')
const productionSwiperSlide = document.querySelectorAll('.production__swiper-slide')

productionSwiperSlide.forEach((el) => {
  el.addEventListener('click', () => {
    modal.classList.add('show');
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
})


// (-_-)
document.addEventListener("DOMContentLoaded", () => {
  document.onscroll = function (e) {
    if (window.pageYOffset > 3000) {
      modal.classList.remove('show')
    } else if (window.pageYOffset < 1900) {
      modal.classList.remove('show')
    }
  }
});

//SWIPER OPINION 

const opinionSwiper = new Swiper('.opinion__swiper', {
  loop: true,
  speed: 2000,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});