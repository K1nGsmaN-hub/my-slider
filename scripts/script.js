import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

  slider({
      container: '.offer__slider',
      slides: '.offer__slide',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      curCounter: '#current',
      totCounter: '#total',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner '
    });
    
});