
const bannerImages = [
  'img/banner-img1.jpg',
  'img/banner-img2.jpg',
  'img/banner-img3.jpg',
  'img/banner-img4.jpg',
  'img/cyber-hero.jpg',
  'img/cyber-hero2.jpg'
    
   
];

const randomIndex = Math.floor(Math.random() * bannerImages.length);
const randomImage = bannerImages[randomIndex];

document.getElementById('banner').style.background = `url(${randomImage}) center center no-repeat`;
