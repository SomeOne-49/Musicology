const search = document.querySelector(".search i");
const searchInput = document.querySelector(".search .search-box");
search.onclick = function () {
  searchInput.classList.toggle("active");
};

const list = document.querySelectorAll("nav ul li a");
addRemoveActive(list);

const main = document.querySelector("main"),
  mainBtn = document.querySelector("main .text-box a");
mainBtn.onmouseover = function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  mainBtn.style.setProperty("--x-axis", x + "px");
  mainBtn.style.setProperty("--y-axis", y + "px");
};

const dance = document.querySelector(".dance"),
  pricing = document.querySelector(".product");
window.onresize = changePosition;
window.onload = changePosition;

//TODO: Events...
//! Window Events:
//* Scroll:
const nav = document.querySelector("nav"),
  product = document.querySelector("#product"),
  promo = document.querySelector("#promo"),
  about = document.querySelector("#about"),
  contact = document.querySelector("#contact");
const america = document.querySelector(".dance-left-ele"),
  asia = document.querySelector(".dance-middle-ele"),
  australia = document.querySelector(".dance-right-ele");
const basic = document.querySelector(".pro-left-ele"),
  professional = document.querySelector(".pro-middle-ele"),
  unlimited = document.querySelector(".pro-right-ele");
const amazingText = document.querySelector(".amazing-dance .box"),
  amazingImg = document.querySelector(".amazing-dance .img-box"),
  bestText = document.querySelector(".best-dance .box"),
  bestImgSm = document.querySelectorAll(".best-dance .img-box")[0],
  bestImgMd = document.querySelectorAll(".best-dance .img-box")[1];
const bestDance = document.querySelector(".best-dance"),
  nums = document.querySelectorAll(".our-statistics .box .plus");
let started = false;

window.addEventListener("scroll", () => {
  //! Change Background Color Of Navbar :
  if (window.innerWidth > 991) changeBackground();

  //! Add 'animated' class to elements :
  addAnimated(dance, america, asia, australia);
  addAnimated(product, basic, professional, unlimited);
  addAnimated(promo, amazingText, amazingImg);
  addAnimated(bestDance, bestText, bestImgSm, bestImgMd);
  //! Run Numbers Counter :
  if (window.scrollY >= bestDance.offsetTop + 25) {
    if (!started) {
      nums.forEach((el) => startCount(el));
    }
    started = true;
  }
  //! Switch Between "active" class :
  sectionDiscovery(product);
  sectionDiscovery(promo);
  sectionDiscovery(about);
  sectionDiscovery(contact);
  console.log(this.scrollY);
});

//* Resize :

window.addEventListener("resize", () => {
  if (window.innerWidth < 992) {
    nav.style.setProperty(
      "background-color",
      "rgba(48, 48, 48,1)",
      "important"
    );
  } else changeBackground();
});

//TODO: Functions...

function changeBackground() {
  let height = document.documentElement.scrollHeight - window.innerHeight;
  if (height >= document.documentElement.scrollTop) {
    nav.style.setProperty(
      "background",
      "rgba(48, 48, 48," +
        (document.documentElement.scrollTop * 1.3) / innerHeight +
        ")",
      "important"
    );
  }
}

function addRemoveActive(el) {
  el.forEach((e) => {
    e.onclick = () => {
      el.forEach((ele) => {
        ele.classList.remove("active");
      });
      e.classList.add("active");
    };
  });
}

function changePosition() {
  let danceXAxis = -this.innerWidth / 4;
  let pricingXAxis = this.innerWidth / 2;
  dance.style.setProperty("--x", danceXAxis + "px");
  pricing.style.setProperty("--x", pricingXAxis + "px");
}

function addAnimated(e, ...ele) {
  if (window.scrollY > e.offsetTop - 550) {
    ele.forEach((el) => el.classList.add("animated"));
  } else {
    ele.forEach((el) => el.classList.remove("animated"));
  }
}

function startCount(el) {
  let goal = el.dataset.num;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

function sectionDiscovery(section) {
  if (window.scrollY + 5 >= section.offsetTop) {
    list.forEach((el) => {
      el.classList.remove("active");
      if (el.hash.slice(1) == section.id)
        if (!el.classList.contains("active")) el.classList.add("active");
    });
  } else if (window.scrollY +1 < product.offsetTop) {
    list.forEach((el) => {
      el.classList.remove("active");
      if (el.textContent.toLowerCase() == "home") el.classList.add("active");
    });
  }
}

/**
 * fix the search input.
 *
 */
