// slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// carousel
let slideIndex = 1;
showSlides(slideIndex);

// from B VID
const autoSlide = () => plusSlides(1);
setInterval(autoSlide, 100000);

/*
function autoSlides() {
 plusSlides(1);
}
setInterval(autoSlides, 3000);
*/ // with this removed, the user will have to change the slides themselves

// replaced these: 
/*
function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}
*/
// with:
const plusSlides = (n) => showSlides((slideIndex += n));

const currentSlide = (n) => showSlides((slideIndex = n));

function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides"); // getElementbyClassName changed to querySelector in B Vid
    const dots = document.querySelectorAll(".dot");
    // console.log(slides);
    // console.log(slides, dots);

    // commented out from B Vid:
    /*
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }*/

   // and replaced with:
   slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

    // cant loop over htmlcollection w for each method
    // as an alternative, Array.from() is used to convert an html collection into an array

    slides.forEach((slide)=> (
        slide.style.display = "none"
    ));

    // array.from removed from B vid
    dots.forEach((dot) =>
        dot.classList.remove("active"));

    // show current slides and set the corresponding dots

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}


// setInterval & //setTimeout take 2 parameters, a function and time

function hi() {
    console.log("Hi");
}

function hello() {
    console.log("Hello");
}


setTimeout(hi, 3000); // example, it will take 3000msecs before displaying. it runs once based on its allocated time

// setInterval(hello, 5000); // this keeps running after the time runs out

// using setInterval for the carousel