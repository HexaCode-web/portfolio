// ========================================
//               CONST AND VARS
//==========================================
const clientWidth = window.matchMedia("(max-width: 570px)");
const navBar = document.querySelector(".NAV");
const sectionsList = Array.from(document.querySelectorAll(".section"));
const skillsList = Array.from(document.querySelectorAll(".skill"));
const progressList = Array.from(document.querySelectorAll(".containers"));
const overlay = document.createElement("div");
const cert1 = document.querySelector("#cert1");
const cert2 = document.querySelector("#cert2");
const img = document.createElement("img");
// ========================================
//              CREATED ELEMENTS
//==========================================
overlay.appendChild(img);
overlay.classList.add("blackout");
// ========================================
//               FUNCTIONS
//==========================================
const nav = (num, section) => {
  if (clientWidth.matches) {
    section.scrollIntoView({ behavior: "smooth" });
    revealMOB;
  } else {
    window.scrollTo(0, num);
    reveal();
  }
};
const hideNav = () => {
  navBar.style.opacity = "0";
  navBar.querySelector(".navlist").style.display = "none";
  navBar.querySelector(".logo").style.opacity = "0";
  navBar.style.backdropFilter = "none";
};
const reveal = () => {
  const windowHeight = window.innerHeight;
  sectionsList.forEach((element) => {
    if (element.getBoundingClientRect().top < windowHeight) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
};
const revealMOB = () => {
  navBar.style.display = "flex";
  const windowHeight = window.innerHeight;
  sectionsList.forEach((element) => {
    if (element.getBoundingClientRect().top < windowHeight) {
      element.classList.add("active");
    }
    if (element.getBoundingClientRect().top < -200) {
      element.classList.remove("active");
    }
  });
};
// ========================================
//               EventListener
//==========================================
cert1.addEventListener("click", () => {
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
  img.src = "images/cerfPROF.jpg";
});
cert2.addEventListener("click", () => {
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
  img.src = "images/cerfCHAL.jpg";
});
overlay.addEventListener("click", () => {
  document.body.removeChild(overlay);
  document.body.style.overflow = "auto";
});
document.addEventListener("scroll", () => {
  hideNav();
});
navBar.addEventListener("mouseout", () => {
  hideNav();
});
navBar.addEventListener("mouseover", () => {
  navBar.style.opacity = "1";
  navBar.querySelector(".navlist").style.display = "flex";
  navBar.querySelector(".logo").style.opacity = "1";
  navBar.style.backdropFilter = "blur(50px)";
});
// ========================================
//               if statements
//==========================================
if (clientWidth.matches) {
  window.setInterval(() => {
    {
      revealMOB();
    }
  }, 200);
} else {
  window.setInterval(() => {
    {
      reveal();
    }
  }, 300);
}
// ========================================
//               LOOPS
//==========================================
skillsList.forEach((element) => {
  element.addEventListener("mouseover", () => {
    progressList[skillsList.indexOf(element)].style.display = "block";
  });
  element.addEventListener("mouseout", () => {
    progressList[skillsList.indexOf(element)].style.display = "none";
  });
});

//FOR THE FORM//
window.addEventListener("DOMContentLoaded", () => {
  // get the form elements defined in your form HTML above

  const form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  const status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  const success = () => {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  };

  const error = () => {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  };

  // handle the form submission event

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

const ajax = (method, url, data, success, error) => {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
};
const options = {
  strings: [" Developing Company", " Maintenance Company", " Design Company"],
  typeSpeed: 50,
  backSpeed: 30,
  startDelay: 30,
  shuffle: true,
  loop: true,
};

const typed = new Typed(".title", options);
