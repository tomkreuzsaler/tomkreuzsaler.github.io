// Big Slider

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
        slider.dataset.currentSlide = 0;
        changeSlide(slider, 0);
    });

    const slidersSmall = document.querySelectorAll('.sliderSmall');

    slidersSmall.forEach((sliderSmall) => {
        sliderSmall.dataset.currentSlide = 0;
        changeSlide(sliderSmall, 0);
    });

});

function changeSlide(sliderContainer, direction) {
    const slides = sliderContainer.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = parseInt(sliderContainer.dataset.currentSlide);

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the new slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;

    // Move the slides container to show the new slide
    sliderContainer.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update the current slide index in the data attribute
    sliderContainer.dataset.currentSlide = currentSlide;
}


// Funktion zum Öffnen des Fullscreen-Sliders
function openFullScreenSlider(sliderSmall) {
    const fullScreenSlider = document.getElementById('fullScreenSlider');
    const fullScreenSlides = fullScreenSlider.querySelector('.fullScreenSlides');

    const currentSlides = sliderSmall.querySelectorAll('.slide');
    const currentSlide = parseInt(sliderSmall.dataset.currentSlide); // Hol den aktuellen Slide-Index vom kleinen Slider

    fullScreenSlides.innerHTML = '';
    currentSlides.forEach((slide, index) => {
        const img = document.createElement('img');
        img.src = slide.src;
        img.alt = slide.alt;
        img.dataset.index = index; // Füge ein data-Attribut hinzu, um den Index zu speichern
        if (index === currentSlide) {
            img.classList.add('active'); // Verwende eine CSS-Klasse für den aktuellen Slide
        }
        fullScreenSlides.appendChild(img);
    });

    fullScreenSlider.dataset.currentSlider = sliderSmall.dataset.smallSliderIndex; // Speichere den Index des aktuellen Sliders
    fullScreenSlider.style.display = 'block';
}

// Funktion zum Schließen des Fullscreen-Sliders
function closeFullScreenSlider() {
    const fullScreenSlider = document.getElementById('fullScreenSlider');
    fullScreenSlider.style.display = 'none';
}

// Funktion zum Ändern der Folien im Fullscreen-Slider
function changeFullScreenSlide(direction) {
    const fullScreenSlider = document.getElementById('fullScreenSlider');
    const fullScreenSlides = fullScreenSlider.querySelectorAll('.fullScreenSlides img');
    const totalSlides = fullScreenSlides.length;
    let currentSlide = Array.from(fullScreenSlides).findIndex(slide => slide.classList.contains('active'));

    if (currentSlide !== -1) {
        fullScreenSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        fullScreenSlides[currentSlide].classList.add('active');
    }
}