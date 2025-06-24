// Simple image carousel
const images = document.querySelectorAll('.carousel img');
let current = 0;
function showCurrent() {
  images.forEach((img, index) => {
    img.classList.toggle('active', index === current);
  });
}
function nextImage() {
  current = (current + 1) % images.length;
  showCurrent();
}
setInterval(nextImage, 3000);
showCurrent();
