document.querySelectorAll(".star-rating").forEach(star => {
  star.style.setProperty("--rating", star.dataset.rating);
});
