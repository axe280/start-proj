// import Swiper from 'swiper/swiper-bundle'
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export const initSwipers = () => {
  new Swiper('.st-swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      740: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};
