const HTML = document.querySelector(".skillone");
const progress90 = document.querySelector(".container1");
let isScrolling;
const clientWidth = window.matchMedia("(max-width: 570px)");
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
window.addEventListener(
  "scroll",
  function () {
    if (clientWidth.matches) {
      revealMOB();
    } else {
      reveal();
    }
  },
  true
);

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
function nav(num, section) {
  if (clientWidth.matches) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo(0, num);
  }
}
document.addEventListener("scroll", function () {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    navBar.style.display = "none";
  }, 2000);
});

function reveal() {
  console.log("Pc");
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

function revealMOB() {
  navBar.style.display = "flex";
  const sec1Pos = sec1.getBoundingClientRect().top;
  const sec2Pos = sec2.getBoundingClientRect().top;
  const sec3Pos = sec3.getBoundingClientRect().top;
  const sec4Pos = sec4.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const number = 300;
  if (sec1Pos + number < windowHeight && sec1Pos > -200) {
    sec1.classList.add("active");
  } else {
    sec1.classList.remove("active");
  }
  if (sec2Pos + number < windowHeight && sec2Pos > -200) {
    sec2.classList.add("active");
  } else {
    sec2.classList.remove("active");
  }
  if (sec3Pos + number < windowHeight && sec3Pos > -200) {
    sec3.classList.add("active");
  } else {
    sec3.classList.remove("active");
  }
  if (sec4Pos + number < windowHeight && sec4Pos > -200) {
    sec4.classList.add("active");
  } else {
    sec4.classList.remove("active");
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
