const heroSlider = document.getElementById('hero');
const dotSlider = document.querySelectorAll('.dot');

let i = 0;
let prevDot = 2;
function updateSliderTimer() {
    i++;
    heroSlider.style.backgroundImage = `url('../media/header-slider-img-0${i}.jpg')`;
    dotSlider[i - 1].classList.add("dot-active");
    dotSlider[prevDot].classList.remove("dot-active");
    prevDot = i - 1;
    if (i === 3) {
        i = 0;
    }
}

function updateSliderActive(dot) {
    heroSlider.style.backgroundImage = `url('../media/header-slider-img-0${dot}.jpg')`;
    dotSlider[dot - 1].classList.add("dot-active");
    dotSlider[prevDot].classList.remove("dot-active");
    prevDot = dot - 1;
}

setInterval(updateSliderTimer, 3000)

const dropdownMenu = document.getElementById('menu-nav');
const hamburgerButton = document.getElementById('hamburger');

let dropdownExpanded = false
function expandDropdown() {
    dropdownMenu.style.display = dropdownExpanded ? "none" : "block";
    hamburgerButton.innerHTML = dropdownExpanded ? "☰" : "✕";
    dropdownExpanded = !dropdownExpanded;
}