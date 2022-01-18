//navigation
const text = document.querySelector(".down");
const move = document.querySelector(".sow")

text.addEventListener("click", function () {
  move.classList.toggle('sow');

});

document.querySelector('.main-btn').addEventListener('click', () => document.querySelector('.mobile-nav')
  .classList.toggle('show'));

document.querySelector('.dropdown').addEventListener('click', () => document.querySelector('.shown')
  .classList.toggle('open'));

//sliders
$('.slider').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
});

$('.slided').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 5000,
});

//animate on scroll


// Initi AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function () {
  aos_init();
});

(jQuery);

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(window).on("load",function(){
$(".loader-wrapper").fadeOut("slow");
});