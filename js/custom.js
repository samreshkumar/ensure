
 $(document).ready(function() {
    $('.home-banner-slider .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      animateOut: 'fadeOut',
      autoplay:1500,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true,
          loop: true
        }
      }
    })
    $('.client-slider .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      animateOut: 'fadeOut',
      autoplay:1500,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true,
          loop: true
        }
      }
    })

$('.mobile-trigger').click(function(){
  $('.navigation').toggleClass('open');
})
$('.search').click(function(){
  $('.search-box').show();
})
$('.form-close').click(function(){
  $('.search-box').hide();
})

  })



  
