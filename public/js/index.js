requirejs.config({
	baseUrl: './js',
});

requirejs([
	'domReady!',
	'jquery',
	'jquery-ui',
	'slick'
], function (a, $) {
	'use strict';

	$( ".datepicker" ).datepicker();
	$( ".accordion" ).accordion();
	$( ".selector" ).accordion({
		heightStyle: "auto"
	});


	$('.slider-top').slick({
		dots: true,
		appendDots: '.slider-dots',
		prevArrow: '.prev',
		nextArrow: '.next'
	});

	$('.slider-bottom').slick({
		dots: true,
		appendDots: '.slider-dots-b',
		prevArrow: '.prev-b',
		nextArrow: '.next-b'
	});

	var Homepage = {
		init: function(){
			this.click();

		},
		click: function(){
			$('.book').on('click', function(event){
				$(this).toggleClass('active');
				$(this).next().slideToggle();
				event.preventDefault();
			});
			$(document).on('click', function(event){
				if(!$(event.target).hasClass('book') && $(event.target).closest('.book-form').length != 1){
					$('.book').removeClass('active');
					$('.book').next().slideUp();
				}
			});
		}
	};

	Homepage.init();

});


