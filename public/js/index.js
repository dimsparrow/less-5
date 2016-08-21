requirejs.config({
	baseUrl: './js',
});

requirejs([
	'domReady!',
	'jquery',
	'slick',
	'jquery-ui'
], function (a, $) {
	'use strict';

	$('.nav').slick({
		dots: true,
		appendDots: '.pagination',
		prevArrow: '.prev-arrow',
		nextArrow: '.next-arrow'
	});

	$( ".datepicker" ).datepicker();

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


