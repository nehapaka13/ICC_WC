document.addEventListener("DOMContentLoaded", function() {
  // Step 1: Get DOM
  let hamburgerMenu = document.querySelector('.hamburger-menu');
  let sidebar = document.querySelector('.sidebar');

  // Step 2: Add click event listener to hamburger menu
  hamburgerMenu.addEventListener('click', function() {
    console.log('Hamburger menu clicked'); // Log a message to the console
    sidebar.classList.toggle('active');
  });
});






// Step 1: Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');

let timeRunning = 3000;
let timeAutoNext = 7000;
let intervalId;

nextDom.onclick = function() {
  clearInterval(intervalId);
  showSlider('next');
}

prevDom.onclick = function() {
  clearInterval(intervalId);
  showSlider('prev');
}

function showSlider(type) {
  let sliderItems = SliderDom.querySelectorAll('.item');
  let thumbnailItems = thumbnailBorderDom.querySelectorAll('.item');

  if (type === 'next') {
    SliderDom.appendChild(sliderItems[0]);
    thumbnailBorderDom.appendChild(thumbnailItems[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(sliderItems[sliderItems.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
    carouselDom.classList.add('prev');
  }

  setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, 600);

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    showSlider('next');
  }, timeAutoNext);
}

// Initial auto slide
intervalId = setInterval(() => {
  showSlider('next');
}, timeAutoNext);


document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelectorAll('.matches .carousel .item img');
  
    carouselImages.forEach(img => {
      // Get the current image source
      let src = img.src;
  
      // Append a query parameter for high quality
      if (src.includes('?')) {
        src += '&quality=high';
      } else {
        src += '?quality=high';
      }
  
      // Update the image source
      img.src = src;
    });
  });
