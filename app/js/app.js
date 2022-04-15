// Import jQuery module (npm i jquery)
import $ from 'jquery';
import 'slick-carousel';
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	const slider = document.querySelector('.sliders');
	console.log(slider)
	
	$('.sliders').slick({
		// lazyLoad: 'ondemand',
		dots: true,
		dotsClass: 'slick-dots',
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: false,

		// autoplay: true
	  });
})
