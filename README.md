# My slider

It's a simple slider with arrow navigation and navigation panel.

## Initialization

Please, download scripts/modules/slider.js file or clone this rep to your folder
And import slider.js to your main js file

```js
import slider from './modules/slider';
```

## Usage

You can use this in your own main.js file. Or connect webpack to your own project and use module-system

## Settings

```js
slider({
  container: name:string,
  slides: name:string,
  nextArrow: name:string,
  prevArrow: name:string,
  curCounter: name:string,
  totCounter: name:string,
  wrapper: name:string,
  field:name:string
});
```

* container - block with slider
* slides - blocks with image
* next/prevArrows - arrow naviagtion
* curCounter - current slider index
* totCounter - total slider value
* wrapper - wrap field
* field - block with all slides

## [Example](https://k1ngsman-hub.github.io/my-slider/)

#### html
```html
<div class="offer">
  <div class="container">
    <div class="offer__slider">
      <div class="offer__slider-counter">
        <div class="offer__slider-prev">
          <img src="icons/left.svg" alt="prev">
        </div>
        <span id="current">03</span>
        /
        <span id="total">04</span>
        <div class="offer__slider-next">
          <img src="icons/right.svg" alt="next">
        </div>
      </div>
      <div class="offer__slider-wrapper">
        <div class="offer__slider-inner">
          <div class="offer__slide">
            <img src="slider/pepper.jpg" alt="pepper">
          </div>
          <div class="offer__slide">
            <img src="slider/food-12.jpg" alt="food">
          </div>
          <div class="offer__slide">
            <img src="slider/olive-oil.jpg" alt="oil">
          </div>
          <div class="offer__slide">
            <img src="slider/paprika.jpg" alt="paprika">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### css
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif; }
  .offer {
    padding: 70px 0 100px 0;
    position: relative; 
  }
    .offer .container {
      display: flex;
      justify-content: space-between; 
    }
.offer__slider {
  width: 650px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.offer__slider-counter {
  display: flex;
  width: 180px;
  align-items: center;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
}
.offer__slider-wrapper {
  width: 100%;
  margin-top: 15px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
}
.offer__slider-prev {
  margin-right: 10px;
  cursor: pointer;
}
.offer__slider-next {
  margin-left: 10px;
  cursor: pointer;
}
.offer__slider #current {
  font-size: 48px;
  font-weight: bold;
  color: black;
}
.offer__slide {
  width: 100%;
  height: 390px;
}
.offer__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; }
.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}
.dot {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 6px;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
}
```

#### js
```js
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
```
