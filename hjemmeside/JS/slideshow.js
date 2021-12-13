// NOTE: Maria Js 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { // NOTE: det næste slide
  showSlides(slideIndex += n);
}

function currentSlide(n) { // NOTE: det fremviste slide
  showSlides(slideIndex = n);
}

function showSlides(n) { // NOTE: Funktionen der gør skifter imellem slides
  let i;
  let slides = document.getElementsByClassName("sslide"); // NOTE: Variabel til stor slide boks
  let dots = document.getElementsByClassName("demo"); // NOTE: Variabel til mini boks
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // NOTE: 2 loop, der ændre hvilket billed man ser, for begge slides.
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }


  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// NOTE: har loop, kontrolstruktur, variabler, array, object, DOM.
// NOTE: event i html, ved "knapper" (højre og venstre markøre)
