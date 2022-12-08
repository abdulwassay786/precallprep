/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      modalContainer.classList.add("show-modal");
    });
  }
};
showModal("open-modal" , "modal-container");

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll(".close-modal");

function closeModal() {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.remove("show-modal");
}
closeBtn.forEach((c) => c.addEventListener("click", closeModal));




/*=============== 2nd SHOW MODAL ===============*/
const showModalt = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton),
      modalContainer = document.getElementById(modalContent);
  
    if (openBtn && modalContainer) {
      openBtn.addEventListener("click", () => {
        modalContainer.classList.add("show-modal");
      });
    }
  };
  showModalt("open-modal2", "modal-container");
  
  /*=============== CLOSE MODAL ===============*/
  const closeBtnt = document.querySelectorAll(".close-modal");
  
  function closeModal() {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.remove("show-modal");
  }
  closeBtnt.forEach((c) => c.addEventListener("click", closeModal));





//   all ------------------
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: ".tc-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".listing-carousel-button-next",
        prevEl: ".listing-carousel-button-prev",
      },
      breakpoints: {
        1025: {
          slidesPerView: 2.4,
        },
      },
    });
  }

  // bubbles -----------------

  setInterval(function () {
    var size = randomValue(sArray);
    $(".bubbles").append(
      '<div class="individual-bubble" style="left: ' +
        randomValue(bArray) +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px; max-width:520px; "></div>'
    );
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});

// EMAIL

const scriptURL = "https://script.google.com/macros/s/AKfycbwlEQvzDqG-hUKt7JugQUhNt5voLLkQb3lsfIQhqHCUF0hJ6oi2Oxb1KW2jM7YJxUkp3A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "Thank You for Your Response"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 2000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
