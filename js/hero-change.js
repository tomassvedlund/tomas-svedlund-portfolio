const images = [
    'url(./assets/images/hero-image.jpg)',
    'url(./assets/images/hero-image-2.jpg)',
    'url(./assets/images/hero-image-3.jpg)',
    'url(./assets/images/hero-image-4.jpg)'
    
  ];

  let index = 0;
  const hero = document.getElementById('hero-change');

  function changeHeroImage() {
    hero.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
  }

  // Byt bild direkt + var 5:e sekund
  changeHeroImage();
  setInterval(changeHeroImage, 5000);