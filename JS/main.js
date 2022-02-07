let navBar = document.querySelector('.navBar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
};

window.onscroll = () =>{
  navBar.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    loop:true,
    centerdSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});