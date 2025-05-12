
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

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("modalClose");

document.querySelectorAll(".certificate-img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.dataset.full;
    modal.classList.add("show");
  });

});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");

});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});