
const bannerImages = [
  'img/banner-img1.jpg',
  'img/banner-img2.jpg',
  'img/banner-img3.jpg',
  'img/banner-img4.jpg',
  'img/cyber-hero.jpg',
  'img/cyber-hero2.jpg'
    
   
];

const banner = document.getElementById('banner');
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("modalClose");


let currentIndex = 0;
const slideInterval = 10000;

//image preload
const preloadImages = (callback) => {
  let loaded = 0;
  if (bannerImages.length === 0) callback();
  
  bannerImages.forEach(src => {
    const img = new Image();
    img.onload = () => {
      loaded++;
      if (loaded === bannerImages.length) callback();
    };
    img.onerror = () => {
      loaded++;
      if (loaded === bannerImages.length) callback();
    };
    img.src = src;
  });
};

//image transition
const changeSlide = () => {
  currentIndex = (currentIndex + 1) % bannerImages.length;
  banner.style.opacity = 0;

  setTimeout(() => {
    banner.style.backgroundImage = `url(${bannerImages[currentIndex]})`;
    banner.style.opacity = 1;
  }, 1000); 
};

//Initialize
preloadImages(() => {
  banner.style.backgroundImage = `url(${bannerImages[0]})`;
  banner.style.opacity = 1;
  setInterval(changeSlide, slideInterval);
});


//Certificate pop up image
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