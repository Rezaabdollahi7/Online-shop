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



// ----------------------- typewritter js --------------------

var app = document.getElementById("product-category");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Product Categorization")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Product segmentation")
  .pauseFor(2500)
  .deleteAll()
  .typeString("<strong>Enjoy !</strong>")
  .pauseFor(2500)
  .start();




  var app_2 = document.getElementById("special-offers");
  var typewriter = new Typewriter(app_2, {
    loop: true,
  });
  typewriter
    .typeString("Top Rated")
    .pauseFor(2500)
    .deleteAll()
    .typeString("bestseller")
    .pauseFor(2500)
   
    .deleteChars(6)
    .typeString("<strong> Choise</strong>")
    .pauseFor(2500)
    .start();



      var app_3 = document.getElementById("macbook-air");
      var typewriter = new Typewriter(app_3, {
        loop: true,
      });
      typewriter
        .typeString("Macbook Air")
        .pauseFor(2500)
        .deleteAll()
        .typeString("Lightweight and powerful laptop")
        .pauseFor(2500)
        .deleteAll()
        .typeString(" High-performance ultrabook")
        .deleteAll()
        .typeString("All-day battery life MacBook.")
        .deleteAll()
        .pauseFor(2500)
        .start();

              var app_4 = document.getElementById("compare-iphone");
              var typewriter = new Typewriter(app_4, {
                loop: true,
              });
              typewriter
                .typeString("Compare iPhone models")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Performance comparison")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Technical comparison")
                .deleteAll()
                .pauseFor(2500)
                .start();

//---------------------------- Modals ------------------------------
// Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btn_2 = document.getElementById("myBtn_2");
// var btn_3 = document.getElementById("myBtn_3");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// btn_2.onclick = function () {
//   modal.style.display = "block";
// };
// btn_3.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }  

//chatgpt
// const modal = document.getElementById("myModal");
// const btns = document.querySelectorAll("#myBtn, #myBtn_2, #myBtn_3");
// const span = document.getElementsByClassName("close")[0];

// btns.forEach((btn) => {
//   btn.onclick = function () {
//     modal.style.display = "block";
//   };
// });

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };
// Get all the modal buttons and modals
var modalBtns = document.querySelectorAll('.open-modal-btn');
var modals = document.querySelectorAll('.modal');

// Loop through all the modal buttons and add a click event listener to each one
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener('click', function() {
    // Get the ID of the modal that corresponds to the clicked button
    var modalId = this.getAttribute('data-modal-id');
    // Loop through all the modals and show the one that corresponds to the clicked button
    for (var j = 0; j < modals.length; j++) {
      if (modals[j].getAttribute('id') === 'modal-' + modalId) {
        modals[j].style.display = 'block';
      } else {
        modals[j].style.display = 'none';
      }
    }
  });
}

// Get all the close buttons and add a click event listener to each one
var closeBtns = document.querySelectorAll('.close');
for (var k = 0; k < closeBtns.length; k++) {
  closeBtns[k].addEventListener('click', function() {
    // Hide the modal
    this.parentElement.parentElement.style.display = 'none';
  });
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});

