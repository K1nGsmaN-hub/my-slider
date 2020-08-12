/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/modules/slider.js":
/*!***********************************!*\
  !*** ./scripts/modules/slider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({container, slides, prevArrow, nextArrow, curCounter, totCounter, wrapper, field}) {
  const offerSlider = document.querySelector(container),
      offerSlides = document.querySelectorAll(slides),
      prevBtn = document.querySelector(prevArrow),
      nextBtn = document.querySelector(nextArrow),
      curSliderCounter = document.querySelector(curCounter),
      totalSliderCounter = document.querySelector(totCounter),
      sliderWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      widthField = window.getComputedStyle(sliderWrapper).width;

  curSliderCounter.textContent = '01';
  totalSliderCounter.textContent = (offerSlides.length < 10) ? `0${offerSlides.length}` : offerSlides.length;

  let offset = 0;

  slidesField.style.width = `${100 * offerSlides.length}%`;

  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  sliderWrapper.style.overflow = 'hidden';

  offerSlides.forEach(item => {
    item.style.width = widthField;
  });

  offerSlider.style.position = 'relative';

  // slider indicators

  const indicators = document.createElement('ol'),
      dots = [];
  indicators.classList.add('carousel-indicators');
  offerSlider.append(indicators);

  for (let i = 0; i < offerSlides.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', `${i + 1}`);
    if (i === 0) {
      dot.style.opacity = '1';
    }

    indicators.append(dot);
    dots.push(dot);
  }


  prevBtn.addEventListener('click', () => {
    if (offset === 0) {
      offset = strToNumber(widthField) * (offerSlides.length - 1);
    } else {
      offset -= strToNumber(widthField);
    }

    slidesField.style.transform = `translateX(${-offset}px)`;

    if (+curSliderCounter.textContent === 1) {
      curSliderCounter.textContent = totalSliderCounter.textContent;
    } else {
      curSliderCounter.textContent = (+curSliderCounter.textContent < 10) ? `0${+curSliderCounter.textContent - 1}` : +curSliderCounter.textContent - 1;
    }

    changeDotStyle();
  });

  nextBtn.addEventListener('click', () => {
    if (offset === strToNumber(widthField) * (offerSlides.length - 1)) {
      offset = 0;
    } else {
      offset += strToNumber(widthField);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (+curSliderCounter.textContent === +totalSliderCounter.textContent) {
      curSliderCounter.textContent = '01';
    } else {
      curSliderCounter.textContent = (+curSliderCounter.textContent < 10) ? `0${+curSliderCounter.textContent + 1}` : +curSliderCounter.textContent + 1;
    }

    changeDotStyle();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e)=> {
      const slideTo = e.target.getAttribute('data-slide-to');

      offset = strToNumber(widthField) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      curSliderCounter.textContent = (slideTo < 10) ? `0${slideTo}` : slideTo;

      changeDotStyle();
    });
  });


  function changeDotStyle() {
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[+curSliderCounter.textContent - 1].style.opacity = '1';
  }

  function strToNumber(str) {
    return +str.match(/\d/ig).join('');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (slider);


/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./scripts/modules/slider.js");


window.addEventListener('DOMContentLoaded', () => {

  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map