window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("loading-finish");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link-list");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const bars = document.querySelectorAll(".bar");

bars.forEach(bar => {
  bar.style.display = "none";
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 2180 ||
    document.documentElement.scrollTop > 2180
  ) {
    bars.forEach(bar => {
      bar.style.animation = "load 1.5s 0s";
      bar.style.display = "block";
    });
  }
}

hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("open-nav");

  links.forEach(link => {
    link.classList.toggle("fade");
  });

  line1.classList.toggle("hover");
  line2.classList.toggle("hover");
  line3.classList.toggle("hover");
});
