let container = document.querySelector(".brands__container");
let Slider;
let openned = false;
function createSlider() {
  if (window.innerWidth < 768) {
    if (!container.classList.contains("swiper-initialized")) {
      Slider = new Swiper(container, {
        slidesPerView: 1.2,
        spaceBetween: 10,
        slideClass: "item",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      });
    }
  } else {
    if (
      container.classList.contains("swiper-initialized") &&
      !Slider.destroyed
    ) {
      Slider.destroy();
    }
  }
}

window.addEventListener("resize", () => {
  createSlider();
  if (window.innerWidth < 768) {
    openned = false;
    container.style.height = "100%";
    show_all.querySelector("span").textContent = "Показать все";
    show_all.querySelector("img").style.transform = "rotate(0deg)";
  }
});
createSlider();

let show_all = document.querySelector(".show-all");
show_all.addEventListener("click", () => {
  if (openned) {
    container.style.height = "192px";
    show_all.querySelector("span").textContent = "Показать все";
    show_all.querySelector("img").style.transform = "rotate(0deg)";
  } else {
    container.style.height = "100%";
    show_all.querySelector("span").textContent = "Скрыть";
    show_all.querySelector("img").style.transform = "rotate(180deg)";
  }
  openned = !openned;
});
