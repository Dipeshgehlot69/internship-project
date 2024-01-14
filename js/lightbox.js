
document.getElementById('openLightbox').addEventListener('click', function() {
  document.getElementById('lightbox').style.display = 'flex';
});

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
document.getElementById('lightbox').addEventListener('click', function(event) {
  if (event.target === this) {
      closeLightbox();
  }
});