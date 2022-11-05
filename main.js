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
const menu = document.querySelector(".menu-btn__container");
const menuBTN = document.querySelector(".menu-btn__burger");
const sideBar = document.querySelector(".SideMenu");
const sideBarBTNs = Array.from(document.querySelectorAll(".SideBarBtn"));
let menuOpen = false;
// ========================================
//              CREATED ELEMENTS
//==========================================
const img = document.createElement("img");
overlay.appendChild(img);
overlay.classList.add("blackout");
const clickArea = document.createElement("div");
document.body.appendChild(clickArea);
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
  if (!clientWidth.matches) {
    navBar.style.opacity = "0";
    navBar.querySelector(".navlist").style.opacity = "0";
    navBar.querySelector(".logo").style.opacity = "0";
    navBar.style.backdropFilter = "none";
  } else {
    return;
  }
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
const closeMenu = () => {
  sideBar.classList.add("inactive");
  sideBar.style.transform = "translatex(-200px)";
  menuOpen = false;
  menu.classList.remove("open");
  clickArea.style.transform = "translatex(-500px)";
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
  if (!clientWidth.matches) {
    navBar.style.opacity = "1";
    navBar.querySelector(".navlist").style.opacity = "1";
    navBar.querySelector(".logo").style.opacity = "1";
    navBar.style.backdropFilter = "blur(50px)";
  } else {
    return;
  }
});
menu.addEventListener("click", () => {
  if (!menuOpen) {
    menuOpen = true;
    menu.classList.add("open");
    sideBar.classList.remove("inactive");
    sideBar.style.transform = "translatex(0px)";
    sideBar.style.backdropFilter = "blur(70px)";
    clickArea.classList.add("clickArea");
    clickArea.style.transform = "translatex(0px)";
  } else {
    closeMenu();
  }
});
clickArea.addEventListener("click", () => {
  closeMenu();
});

// ========================================
//               if statements
//==========================================
if (clientWidth.matches) {
  menu.classList.remove("inactive");
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
sideBarBTNs.forEach((button) => {
  button.addEventListener("click", () => {
    closeMenu();
  });
  button.addEventListener("mouseover", () => {
    button.querySelector(".icon").style.transform = "translatex(-50px)";
    button.querySelector(".HiddenText").style.opacity = "1";
    button.querySelector(".HiddenText").style.transform =
      "translate(10px, 5px)";
  });
  button.addEventListener("mouseout", () => {
    button.querySelector(".icon").style.transform = "translatex(0px)";
    button.querySelector(".HiddenText").style.opacity = "0";
    button.querySelector(".HiddenText").style.transform =
      "translate(10px, 42px)";
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
