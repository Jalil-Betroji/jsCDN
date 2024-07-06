document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-img");
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });
});

function openModal(index) {
  currentImageIndex = index;
  document.getElementById("overlay").style.display = "block";
  document.getElementById("myModal").style.display = "block";
  document.querySelector("header").style.display = "none";
  document.querySelector("body").style.overflow = "hidden";
  console.log(index);
  console.log(document.querySelectorAll("img")[index].src);
  document.getElementById("modalImage").src =
    document.querySelectorAll("img")[index].src;

  // Add touch event listeners
  const modal = document.getElementById("modalImage");
  modal.addEventListener("touchstart", handleTouchStart, false);
  modal.addEventListener("touchmove", handleTouchMove, false);
  modal.addEventListener("touchend", handleTouchEnd, false);
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("myModal").style.display = "none";
  document.querySelector("header").style.display = "block";
  document.querySelector("body").style.overflow = "auto";

  // Remove touch event listeners
  const modal = document.getElementById("modalImage");
  modal.removeEventListener("touchstart", handleTouchStart, false);
  modal.removeEventListener("touchmove", handleTouchMove, false);
  modal.removeEventListener("touchend", handleTouchEnd, false);
}

function changeImage(direction) {
  currentImageIndex += direction;
  const images = document.querySelectorAll("img");
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  document.getElementById("modalImage").src = images[currentImageIndex].src;
}

function handleTouchStart(event) {
  const touch = event.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
}

function handleTouchMove(event) {
  const touch = event.touches[0];
  endX = touch.clientX;
  endY = touch.clientY;
}

function handleTouchEnd() {
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal swipe
    if (deltaX > 0) {
      // Swipe right
      changeImage(-1);
    } else {
      // Swipe left
      changeImage(1);
    }
  }
  // Reset values
  startX = startY = endX = endY = null;
}
