$(function() {

  // Custom JS

  // Hamburger toggle by clicking .site-overlay
  $('.hamburger').on( 'click', function() {

    $(this).toggleClass('is-active');

  });

  $('.site-overlay').on('click', function() {

    $('.hamburger').toggleClass('is-active');

  });

  // ResponsiveSlides plugin control
  $(function() {
    $('.rslides').responsiveSlides({
      speed: 1500
    });
  });

  // Magnific-Popup plugin control
  $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

// Section-2 items on hover show overlay and price
// $('.section-3__item').hover( function() {

//   $(this).find('.section-3__item-overlay').toggleClass('visible');
//   $(this).find('.section-3__item-title').toggleClass('visible');

// });



});
