


  const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

tabItems.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const targetContent = document.querySelector(tabTarget.dataset.target);

  // Remove active class from all tab items
  tabItems.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });

  // Remove active class from all content items
  tabContents.forEach(function (content) {
    content.classList.remove('tabs__content-item--active');
  });

  // Add active class to clicked tab and corresponding content
  tabTarget.classList.add('tabs__btn-item--active');
  targetContent.classList.add('tabs__content-item--active');
}



const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});