const HTML = document.querySelector(".skillone");
const progress90 = document.querySelector(".container1");

const CSS = document.querySelector(".skilltwo");
const progress80 = document.querySelector(".container2");

const JS = document.querySelector(".skillthree");
const progress70 = document.querySelector(".container3");

const Creative = document.querySelector(".skillfour");
const progress85 = document.querySelector(".container4");

HTML.addEventListener("mouseover", function () {
  progress90.style.display = "block";
});
HTML.addEventListener("mouseout", function () {
  progress90.style.display = "none";
});

CSS.addEventListener("mouseover", function () {
  progress80.style.display = "block";
});
CSS.addEventListener("mouseout", function () {
  progress80.style.display = "none";
});
Creative;
JS.addEventListener("mouseover", function () {
  progress70.style.display = "block";
});
JS.addEventListener("mouseout", function () {
  progress70.style.display = "none";
});

Creative.addEventListener("mouseover", function () {
  progress85.style.display = "block";
});
Creative.addEventListener("mouseout", function () {
  progress85.style.display = "none";
});
