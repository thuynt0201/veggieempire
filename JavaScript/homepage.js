let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }



  document.querySelector('#search-user').onclick = () =>{
    document.querySelector('#login-form').classList.toggle('active');
  }
  
  document.querySelector('#close').onclick = () =>{
    document.querySelector('#login-form').classList.remove('active');
  }
// Hero Slider
$('.hero-slider').owlCarousel({
  loop:true,
  nav:true,
  dots: true,
  items: 1,
  smartSpeed: 1000,
  navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
  // responsive:{
  //     0:{
  //         items:1
  //     },
  //     600:{
  //         items:3
  //     },
  //     1000:{
  //         items:5
  //     }
  // }
})


  // Porfolio Slider
  $('.portfolio-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        }
    }
  })




  // Reviews Slider
$('.reviews-slider').owlCarousel({
  loop:true,
  nav:true,
  dots: false,
  smartSpeed: 1000,
  margin: 24,
  navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      992:{
          items:2
      }
  }
})