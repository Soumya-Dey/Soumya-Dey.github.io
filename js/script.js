window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("loading-finish");
});

var hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link-list");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("open-nav");

  links.forEach(link => {
    link.classList.toggle("fade");
  });

  line1.classList.toggle("hover");
  line2.classList.toggle("hover");
  line3.classList.toggle("hover");
});

bars.forEach(bar => {
  bar.style.display = "none";
});

var mediaWidth = window.matchMedia("(min-width: 768px)");
mediaQueryFunction(mediaWidth);
x.addListener(mediaQueryFunction);

function mediaQueryFunction(mediaW) {
  if (mediaW.matches) { // If media query matches
    window.onscroll = function() {
      scrollFunction(2080);
    };
  } else {
    window.onscroll = function() {
      scrollFunction(3080);
    };
  }
}

function scrollFunction(topPx) {
  if (
    document.body.scrollTop > topPx ||
    document.documentElement.scrollTop > topPx
  ) {
    bars.forEach(bar => {
      bar.style.animation = "load 1.5s 0s";
      bar.style.display = "block";
    });
  }
}