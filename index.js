function scaleSlides() {
    const baseWidth = 1920;
    const baseHeight = 1080;

    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;

    const scale = Math.min(scaleX, scaleY);

    const allSlides = document.querySelectorAll(".slide");
    for (let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.transform = "scale(" + scale + ")";
    }
}

window.addEventListener("load", scaleSlides);
window.addEventListener("resize", scaleSlides);


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slideNumber = document.getElementById("slide-number");

for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
}
slides[0].classList.add("active");

document.getElementById("prev").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");

    if (currentSlide > 0) {
        currentSlide = currentSlide - 1;
    } else {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
    slideNumber.innerText = "Slajd nr " + (currentSlide + 1);

    scaleSlides();
});

document.getElementById("next").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");

    if (currentSlide < slides.length - 1) {
        currentSlide = currentSlide + 1;
    } else {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
    slideNumber.innerText = "Slajd nr " + (currentSlide + 1);

    scaleSlides();
});
