const menu = document.querySelector(".navbar__menu");
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const cancelBtn = document.querySelector(".navbar__cancelBtn");

toggleBtn.onclick = ()=>{
  menu.classList.add("active");
  toggleBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  toggleBtn.classList.remove("hide");
}

// Brand Logo Swiper
var brandSwiper = new Swiper('.brand-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.brand-swiper-pagination',
  },
  //init: false,
  pagination: {
    el: '.brand-swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 200,
    },
  }
});

