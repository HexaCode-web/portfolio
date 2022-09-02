const HTML = document.querySelector(".skillone");
const progress90 = document.querySelector(".container1");
let isScrolling;
const navBar = document.querySelector(".NAV");
const CSS = document.querySelector(".skilltwo");
const progress80 = document.querySelector(".container2");

const JS = document.querySelector(".skillthree");
const progress70 = document.querySelector(".container3");

const Creative = document.querySelector(".skillfour");
const progress85 = document.querySelector(".container4");
const sec1 = document.querySelector("#About");
const sec2 = document.querySelector("#projects");
const sec3 = document.querySelector("#skills");
const sec4 = document.querySelector("#contact");

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
window.addEventListener("scroll", function () {
  reveal();
});
document.addEventListener("scroll", function () {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    navBar.style.display = "none";
  }, 2000);
});
function nav(num) {
  window.scrollTo(0, num);
}
function reveal() {
  navBar.style.display = "flex";
  const sec1Pos = sec1.getBoundingClientRect().top;
  const sec2Pos = sec2.getBoundingClientRect().top;
  const sec3Pos = sec3.getBoundingClientRect().top;
  const sec4Pos = sec4.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const number = 150;
  if (sec1Pos < windowHeight - number) {
    sec1.style.display = "block";
  } else {
    sec1.style.display = "none";
  }
  if (sec2Pos < windowHeight - number) {
    sec2.style.display = "block";
  } else {
    sec2.style.display = "none";
  }
  if (sec3Pos < windowHeight - number) {
    sec3.style.display = "block";
  } else {
    sec3.style.display = "none";
  }
  if (sec4Pos < windowHeight - number) {
    sec4.style.display = "flex";
  } else {
    sec4.style.display = "none";
  }
}
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
