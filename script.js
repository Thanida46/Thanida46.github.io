const slideshows = {
    'agent-slides': { index: 1 },
    'dubai-carx-slides': { index: 1 },
    'chilling-track-slides': { index: 1 },
    'web-app-slides': { index: 1 },
};

// Function to scroll to profile section
function scrollToProfile() {
    const profileSection = document.querySelector('.profile-all');
    profileSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize all slideshows
for (let slideName in slideshows) {
    showSlides(1, slideName);
}

// Next/previous controls
function plusSlides(n, slidesName) {
    let slideshow = slideshows[slidesName];
    slideshow.index += n;
    showSlides(slideshow.index, slidesName);
}

// Thumbnail image controls
function currentSlide(n, slidesName) {
    let slideshow = slideshows[slidesName];
    slideshow.index = n;
    showSlides(slideshow.index, slidesName);
}

function showSlides(n, slidesName) {
    let slides = document.getElementsByClassName(slidesName);
    let slideshow = slideshows[slidesName];
    
    if (n > slides.length) {
        slideshow.index = 1;
    }
    if (n < 1) {
        slideshow.index = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideshow.index - 1].style.display = "block";
}
