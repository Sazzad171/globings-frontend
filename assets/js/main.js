$(document).ready(function () {
  //Nice Select
  $(".niceSelect").niceSelect();

  // Company Gallery
  $(".company_details_img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // show hide story for create new
  $(".story-preview-box .own-story a").click(function () {
    $(".create-story-area").addClass("show");
  });

  // show hide story for existing story
  $(".story-preview-box .item.others a").click(function () {
    $(".existing-story-area").addClass("show");
  });

  // hide story
  $(".close-icon").click(function () {
    $(".story-full-area").removeClass("show");
  });
  $(".close-story").click(function () {
    $(".story-full-area").removeClass("show");
  });

  // friends profile tab trigger
  $(".show-profile").click(function (e) {
    e.preventDefault();
    $("#noProfile").removeClass("show");
    $("#noProfile").removeClass("active");
    $("#fullProfile").addClass("show");
    $("#fullProfile").addClass("active");
  });

  // friends message tab trigger
  $(".show-message").click(function (e) {
    e.preventDefault();
    $("#noMessage").removeClass("show");
    $("#noMessage").removeClass("active");
    $("#msgFullProfile").removeClass("show");
    $("#msgFullProfile").removeClass("active");
    $("#messageBox").addClass("show");
    $("#messageBox").addClass("active");
  });

   // friends message profile tab trigger
   $(".show-message-profile").click(function (e) {
    e.preventDefault();
    $("#noMessage").removeClass("show");
    $("#noMessage").removeClass("active");
    $("#messageBox").removeClass("show");
    $("#messageBox").removeClass("active");
    $("#msgFullProfile").addClass("show");
    $("#msgFullProfile").addClass("active");
  });

  // search sidebar show
  $("#mainSearch").focus(function () {
    $(".search-bar-box").addClass("show");
  });

  // search sidebar hide
  $(".search-bar-box .menu-area .search-icon i").click(function () {
    $(".search-bar-box").removeClass("show");
  });

  // swiper for story view
  var swiper = new Swiper(".storyView", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // swiper for my places slider
  var swiperForMyPlaces = new Swiper(".myPlacesSlider", {
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });

  //Video Popup
  $(".modal_video_btn").modalVideo({
    youtube: {
      controls: 1,
      nocookie: true,
    },
  });

  //Rating
  $("#rattingStar").rates({
    shape: "rates-black",
  });
  //Country Telephone Number
  //!More Info https://www.jqueryscript.net/form/jQuery-International-Telephone-Input-With-Flags-Dial-Codes.html
  $("#countryPhoneTelephone").intlTelInput({
    separateDialCode: true,
    autoPlaceholder: "aggressive",
    preferredCountries: ["us", "gb"],
    utilsScript: "assets/plugins/js/utils.js",
  });

  //Croping Image
  //! More Info https://fengyuanchen.github.io/cropperjs/
  //?Download the file from github and check example for rounded circle or others advanced features
  $("#cropImage").cropper({});

  //Badge Circle
  $(".circle_area .small").percircle({
    percent: 27,
  });

  //Counter
  $(".count-num").rCounter({
    duration: 30,
  });
  // <span class="count-num">2575</span> if decimal 2,5.6
  //Select 2
  function selectTwo(selectID, placeholder) {
    $(selectID).select2({
      placeholder: placeholder,
    });
  }
  if (document.querySelector("#citySelect")) {
    selectTwo("#citySelect", "Select City");
  }
  if (document.querySelector("#locationSelect")) {
    selectTwo("#locationSelect", "Select Location");
  }
});

//Add Class
function displayItem(addID, addClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${addID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(addClass);
  ovlerlayDiv.style.cssText = "  display: block;";
}
//Remove Class
function removeDisplayItem(removeID, removeClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${removeID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(removeClass);
  ovlerlayDiv.style.cssText = "  display: none;";
}

//OutSide Scroll Hidden
function scrollOutsideHidden() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:hidden;";
}
//OutSide Scroll Scroll
function scrollOutsideScroll() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:auto;";
}

//Sticky Navbar
//Sticky Navbar
function stickyHeader(stickyTag, stickyClass, scrollHeight = 0) {
  let stickyWrapper = document.querySelector(`#${stickyTag}`);
  stickyWrapper.classList.toggle(stickyClass, scrollY > scrollHeight);
}
let headerWrapper = document.querySelector("#headerWrapper");
if (headerWrapper) {
  window.addEventListener("scroll", () => {
    stickyHeader("headerWrapper", "navbar_fixed");
  });
}

// Form Validation Methods Using Bootstrap 5
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//Slider Single
function singleSlider(
  sliderID,
  sliderNextArrow,
  sliderPrevArrow,
  breakpoint = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  slidesPerView = 1,
  slidesPerGroup = 1,
  spaceBetween = 10
) {
  var swiperHero = new Swiper(`${sliderID} .swiper`, {
    speed: 1100,
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    slidesPerGroup: slidesPerGroup,
    keyboard: {
      enabled: true,
      // onlyInViewport: true,
    },
    navigation: {
      nextEl: sliderNextArrow,
      prevEl: sliderPrevArrow,
    },
    // Responsive breakpoints
    breakpoints: breakpoint,
  });
}
singleSlider(
  ".location_slider_area",
  ".location_next_icon",
  ".location_prev_icon",
  {
    576: {
      slidesPerView: 5,
      spaceBetween: 12,
    },

    768: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 8,
    },

    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 4,
    },
    1400: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 40,
    },
  },
  3,
  3
);

//Seen Profile Slider
var swiperSeenProfile = new Swiper(".seen_profile_slider_area .swiper", {
  speed: 1100,
  slidesPerView: "auto",
  spaceBetween: 15,
});

//Reward Slider
var swiperReward = new Swiper(".reward_slider_area .swiper", {
  speed: 1100,
  pagination: {
    el: ".reward_pagination",
    clickable: true,
  },
});

//Company Sidebar
let mapSidebarBtn = document.querySelector("#mapSidebarBtn");
let closeBtn = document.querySelector("#closeBtn");
let companyOverlay = document.querySelector("#companyOverlay");
let companySidebarArea = document.querySelector("#companySidebarArea");

if (mapSidebarBtn) {
  mapSidebarBtn.addEventListener("click", () => {
    displayItem(
      "companySidebarArea",
      "company_sidebar_active",
      "companyOverlay"
    );
    scrollOutsideHidden();
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    removeDisplayItem(
      "companySidebarArea",
      "company_sidebar_active",
      "companyOverlay"
    );
    scrollOutsideScroll();
  });
}
if (companyOverlay) {
  companyOverlay.addEventListener("click", () => {
    removeDisplayItem(
      "companySidebarArea",
      "company_sidebar_active",
      "companyOverlay"
    );
    scrollOutsideScroll();
  });
}

//Comapny Details show hide Text
let companyMoreBtnEl = document.querySelectorAll("#companyMoreBtn");
for (let x of companyMoreBtnEl) {
  x.addEventListener("click", () => {
    hideShowConent(x, ".more_hidden_text", "Less", "More");
  });
}
//Location show hide Text
let locationTextBtnEl = document.querySelectorAll("#locationTextBtn");
for (let x of locationTextBtnEl) {
  x.addEventListener("click", () => {
    hideShowConent(x, ".more_hidden_text", "Less", "See More");
  });
}
//Review show hide Text
let reviewMoreBtnEl = document.querySelectorAll("#reviewMoreBtn");
for (let x of reviewMoreBtnEl) {
  x.addEventListener("click", () => {
    hideShowConent(x, ".more_hidden_text", "Read Less", "Read More");
  });
}
const hideShowConent = (x, parentSelector, removeBtnText, addBtnText) => {
  const parentNode = x.parentNode.querySelectorAll(parentSelector);
  if (!x.classList.contains("show")) {
    x.classList.add("show");
    x.innerHTML = removeBtnText;
    for (let y of parentNode) {
      y.style.cssText = "display:block";
    }
  } else {
    x.classList.remove("show");
    x.innerHTML = addBtnText;
    for (let y of parentNode) {
      y.style.cssText = "display:none";
    }
  }
};

//Hour Button
let hourBtnEl = document.querySelector("#hourBtn");
let hourListsAreaEl = document.querySelector("#hourListsArea");
if (hourBtnEl) {
  hourBtnEl.addEventListener("click", () => {
    hourListsAreaEl.classList.toggle("hour_active");
  });
}

//Filter Accordion
let accordionFilterBtnEl = document.querySelectorAll("#accordionFilterBtn");
for (let x of accordionFilterBtnEl) {
  x.addEventListener("click", () => {
    const parentNodeEl = x.parentNode;
    parentNodeEl.classList.toggle("accordion_active");
    console.log("parentNodeEl", parentNodeEl, x.parentNode);
  });
}

//Quotation  Increment Decrement
let qtyPlusButton = document.querySelector("#qtyPlusButton");
let qtyMinusButton = document.querySelector("#qtyMinusButton");
let qtyProductValue = document.querySelector("#qtyProductValue");

if (qtyProductValue) {
  qtyProductValue.value = 0;
}

if (qtyPlusButton) {
  qtyPlusButton.addEventListener("click", () => {
    qtyProductValue.value = parseInt(qtyProductValue.value) + 1;
  });
}
if (qtyMinusButton) {
  qtyMinusButton.addEventListener("click", () => {
    if (qtyProductValue.value > 0) {
      qtyProductValue.value = parseInt(qtyProductValue.value) - 1;
    }
  });
}

//Password Visibility
//01.Login
let inputPassword1 = document.querySelector("#passwordInput1");
if (inputPassword1) {
  inputPassword1.addEventListener("click", () => {
    passwordVisibility(
      "passwordInput1",
      "passwordVisibilityArea1",
      "eyeOpen1",
      "eyeClose1"
    );
  });
}
let inputPassword2 = document.querySelector("#passwordInput2");
if (inputPassword2) {
  inputPassword2.addEventListener("click", () => {
    passwordVisibility(
      "passwordInput2",
      "passwordVisibilityArea2",
      "eyeOpen2",
      "eyeClose2"
    );
  });
}
let inputPassword3 = document.querySelector("#passwordInput3");
if (inputPassword3) {
  inputPassword3.addEventListener("click", () => {
    passwordVisibility(
      "passwordInput3",
      "passwordVisibilityArea3",
      "eyeOpen3",
      "eyeClose3"
    );
  });
}

function passwordVisibility(inputId, eyeIconArea, eyeOpen, eyeClose) {
  let passwordInput = document.getElementById(inputId);
  let passwordIconArea = document.getElementById(eyeIconArea);
  let eyeOpenIcon = document.getElementById(eyeOpen);
  let eyeCloseIcon = document.getElementById(eyeClose);
  passwordIconArea.style.cssText = "display:inline";
  eyeOpenIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    }
    eyeOpenIcon.style.cssText = "display:none";
    eyeCloseIcon.style.cssText = "display:inline";
  });
  eyeCloseIcon.addEventListener("click", () => {
    if (passwordInput.type === "text") {
      passwordInput.type = "password";
    }
    eyeCloseIcon.style.cssText = "display:none";
    eyeOpenIcon.style.cssText = "display:inline";
  });
}

// ScrollToUp
let scroll = document.querySelector("#scrollTop");
function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
if (scroll) {
  window.addEventListener("scroll", function () {
    scroll.classList.toggle("scroll_active", window.scrollY > 500);
  });
  scroll.addEventListener("click", () => {
    scrollUp();
  });
}
