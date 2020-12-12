import $ from "jquery";
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)
// require("./other_script.js"); // Require Other Script(s) from app/js folder Example
import slick from "slick-carousel";
import easings from "fullpage.js/vendors/easings.min";
import scrolloverflow from "fullpage.js/vendors/scrolloverflow.min";
import fullpage from "fullpage.js";

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  $(".slider").slick({
    infinite: false,
    prevArrow:
      '<button class="slider__btn slider__btn-left"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.218 1L1 9l8.218 8" /></svg></button>',
    nextArrow:
      '<button class="slider__btn slider__btn-right"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.782 17L9 9 .782 1" /></svg></button>',
  });

  new fullpage("#fullpage", {
    sectionSelector: ".section",
    //   // licenseKey: "hello",
    lockAnchors: false,
    autoScrolling: true,
    asrollHorizontally: true,
    // css3: true,
    menu: "#header__nav",
    scrollOverflow: true,
    anchors: ["home", "about", "features", "specific", "faq", "contacts"],
  });

  // accordion menu
  $(".faq .faq__itm h3").on("click", () => {
    $(".faq__itm").removeClass("active");
    $(this).parent().addClass("active");
  });

  $(".burger").on("click", () => {
    $(".burger").toggleClass("burger--active");
    $(".menu__list").toggleClass("menu__list--active");
  });
  $(".menu__itm").on("click", () => {
    $(".burger").removeClass("burger--active");
    $(".menu__list").removeClass("menu__list--active");
  });
});
