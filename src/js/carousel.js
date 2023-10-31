const slidesContainer = document.getElementById("testimonials-list-id");
const slide = document.querySelector(".testimonials-item");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  console.log("HELLO");
  const slideWidth = slide.clientWidth + "40px";
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  console.log("HELLO");
  const slideWidth = slide.clientWidth + "40px";
  slidesContainer.scrollLeft -= slideWidth;
});