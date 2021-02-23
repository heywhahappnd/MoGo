// Header Slider // 

const sliderItems = document.getElementsByClassName("slider__item");

for (let i = 0; i < sliderItems.length; i++) {
  
  sliderItems[i].addEventListener('click', function(){
    
    if (sliderItems[i].className.includes('active')) {
      return;
    }
   
    let currentActiveItem = document.getElementsByClassName('active')[0];
    currentActiveItem.classList.remove('active');
    sliderItems[i].classList.add('active');
  });
}

// Accordion // 

const accordionItems = document.getElementsByClassName('accordion__item');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].onclick = function() {
    this.classList.toggle('active');
  }
}


// Slider 
const reviewsItems = document.getElementsByClassName('reviews__item');
const prevButton = document.getElementsByClassName('reviews__btn--prev')[0];
const nextButtton = document.getElementsByClassName('reviews__btn--next')[0];

let currentSlideIndex = 0;
reviewsItems[currentSlideIndex].style.display = 'block';

//slideNext function
function slideNext() {
  currentSlideIndex++;

  if (currentSlideIndex >= reviewsItems.length) {
    reviewsItems[currentSlideIndex - 1].style.display = 'none';
    currentSlideIndex = 0;
    reviewsItems[currentSlideIndex].style.display = 'block';
    return;
  }
  
  reviewsItems[currentSlideIndex - 1].style.display = 'none';
  reviewsItems[currentSlideIndex].style.display = 'block';
}

function slidePrev() {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    reviewsItems[currentSlideIndex + 1].style.display = 'none';
    currentSlideIndex = reviewsItems.length - 1;
    reviewsItems[currentSlideIndex].style.display = 'block';
    return;
  }
  
  reviewsItems[currentSlideIndex + 1].style.display = 'none';
  reviewsItems[currentSlideIndex].style.display = 'block';
}


nextButtton.onclick = function(e) {
  e.preventDefault();
  slideNext();
}

prevButton.onclick = function(e) {
  e.preventDefault();
  slidePrev();
}