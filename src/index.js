console.log('JavaScript working');
import "../styles/styles.scss"; 
 
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

const dots = document.getElementsByClassName("dot");

for (let index = 1; index <= dots.length; index++) {
    document.querySelector(`.dot-${index}`).addEventListener("click", () => {
        currentSlide(index);
        document.querySelector(`.dot-${index}`).src = "../images/active-dot.svg";
    });
}

const btnNextSlide = document.querySelector(".slide-chevron");
btnNextSlide.addEventListener("click", () => {
    showSlides(slideIndex += 1);
});

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");  
        dots[i].classList.remove("dot-active");
        dots[i].src = "../images/inactive-dot.svg";
    }

    slides[slideIndex-1].classList.add("active");  
    dots[slideIndex-1].classList.add("dot-active");  
    dots[slideIndex-1].src = "../images/active-dot.svg";
}   
