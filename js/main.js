//navigation
// const text = document.querySelector(".down");
// const move = document.querySelector(".sow")

// text.addEventListener("click", function () {
//   move.classList.toggle('sow');

// });

// document.querySelector('.main-btn').addEventListener('click', () => document.querySelector('.mobile-nav')
//   .classList.toggle('show'));

// document.querySelector('.dropdown').addEventListener('click', () => document.querySelector('.shown')
//   .classList.toggle('open'));

//sliders

$('.slided').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 6000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


$(document).ready(function(){
  $('.prod').slick({
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });
});

$(document).ready(function(){
  $('.pf').slick({
  slidesToShow: 4,
  arrows: false,
  autoplaySpeed: 4000,
  infinite: true,
  centerMode: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });
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