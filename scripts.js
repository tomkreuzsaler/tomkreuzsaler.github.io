
// ====================SIDEBAR====================
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.transform = 'translateX(0%)'
}

function hideSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.transform = 'translateX(100%)'
}


// ====================INIT SLIDERS====================
document.addEventListener("DOMContentLoaded", () => {

  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    slider.dataset.currentSlide = 0;
    changeSlide(slider, 0);
  });
});

// ====================SLIDER CHANGE SLIDE====================
function changeSlide(sliderContainer, direction) {
  const slides = sliderContainer.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = parseInt(sliderContainer.dataset.currentSlide);

  // Hide the current slide
  slides[currentSlide].style.opacity = 0;

  // Calculate the new slide index
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Show the new slide
  slides[currentSlide].style.opacity = 1;

  // Move the slides container to show the new slide
  sliderContainer.querySelector(".slides").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;

  // Update the current slide index in the data attribute
  sliderContainer.dataset.currentSlide = currentSlide;
}


// ====================FULLSCREENSLIDER====================
function openFullScreenSlider(slider) {
  const fullScreenSlider = document.getElementById("fullScreenSlider");
  const fullScreenSlides = fullScreenSlider.querySelector(".fullScreenSlides");

  // Get current Slide ID from  Slider
  const currentSlides = slider.querySelectorAll(".slide");
  const currentSlide = parseInt(slider.dataset.currentSlide); 

  fullScreenSlides.innerHTML = "";
  currentSlides.forEach((slide, index) => {
    const img = document.createElement("img");
    img.src = slide.src;
    img.alt = slide.alt;
    img.dataset.index = index; 
    if (index === currentSlide) {
      img.classList.add("active"); 
    }
    fullScreenSlides.appendChild(img);
  });

  fullScreenSlider.dataset.currentSlider = slider.dataset.SliderIndex; 
  fullScreenSlider.style.display = "block";
}

function closeFullScreenSlider() {
  const fullScreenSlider = document.getElementById("fullScreenSlider");
  fullScreenSlider.style.display = "none";
}

function changeFullScreenSlide(direction) {
  const fullScreenSlider = document.getElementById("fullScreenSlider");
  const fullScreenSlides = fullScreenSlider.querySelectorAll(
    ".fullScreenSlides img"
  );
  const totalSlides = fullScreenSlides.length;
  let currentSlide = Array.from(fullScreenSlides).findIndex((slide) =>
    slide.classList.contains("active")
  );

  if (currentSlide !== -1) {
    fullScreenSlides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    fullScreenSlides[currentSlide].classList.add("active");
  }
}


// ====================CONTACT FORM EMAIJS====================
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Collect the form data
    const formData = {
      start_date: document.getElementById('start-date').value,
      end_date: document.getElementById('end-date').value,
      apartment: document.getElementById('apartment').value,
      adults: document.getElementById('adults').value,
      children: document.getElementById('children').value,
      name: document.getElementById('name').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      tel: document.getElementById('tel').value,
      email: document.getElementById('email').value,
      comments: document.getElementById('comments').value
    };

    // Use EmailJS to send the form data via email
    emailjs.send('service_j4z66zl', 'template_zplu5ai', formData)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('contact-form').reset(); // Clear form fields
        document.getElementById('success-message').classList.add('show'); // Show success message
      }, function(error) {
        alert('Failed to send the form. Please try again.');
        console.log('FAILED...', error);
      });
  });
});
