// const { EventListeners } = require("tsparticles-engine");

var countDownDate = new Date("may 1, 2024 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 60));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    '<span id="day">' +
    days +
    "</span> " +
    '<span id="hours">' +
    hours +
    "</span> " +
    '<span id="minutes">' +
    minutes +
    "</span>" +
    '<span id="seconds">' +
    seconds +
    "</span>";

  var z = document.getElementsByClassName("demos");
  for (i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="day">' +
      days +
      "</span> " +
      '<span id="hours">' +
      hours +
      "</span> " +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";

    document
      .getElementById("after-expire")
      .setAttribute("id", "offer-expire-text");
    document.getElementById("offer-expire-text").innerHTML = "Time Out";
    document.getElementById("offer-expire-text").style.background =
      "rgba(176, 175, 175, 0.3)";
    document.getElementById("offer-blur").style.filter = "blur(2px)";
  }
}, 1000);

// $(".carousel").carousel();
//     $(document).ready(function () {
//       $(".owl-carousel").owlCarousel();
//     });

// -------------------------------- iphones images --------------------------------

const colorSpans = document.querySelectorAll(".color-item-1 span");
const mobileImg = document.getElementById("mobile-img-1");

colorSpans.forEach((span) => {
  span.addEventListener("click", () => {
    const color = span.classList[0];
    console.log(color);
    const imgSrc = `./accets/img/mobile offers/13promax-${color}.jpg`;
    mobileImg.src = imgSrc;
  });
});

const colorSpans_2 = document.querySelectorAll(".color-item-2 span");
const mobileImg_2 = document.getElementById("mobile-img-2");

colorSpans_2.forEach((span) => {
  span.addEventListener("click", () => {
    const color = span.classList[0];
    const imgSrc = `./accets/img/mobile offers/14plus-${color}.jpg`;
    mobileImg_2.src = imgSrc;
  });
});

const colorSpans_3 = document.querySelectorAll(".color-item-3 span");
const mobileImg_3 = document.getElementById("mobile-img-3");

colorSpans_3.forEach((span) => {
  span.addEventListener("click", () => {
    const color = span.classList[0];
    const imgSrc = `./accets/img/mobile offers/14promax-${color}.jpg`;
    mobileImg_3.src = imgSrc;
  });
});

