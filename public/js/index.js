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
	  $( function() {
	$( "#datepicker" ).datepicker();
  } );
});

var Homepage = {
	init: function(){
		this.click();
	},
	click: function(){
		$('.book').on('click', function(){
			if(!$(this).hasClass('active')){
				$(this).addClass('active');
				$(this).next().slideDown('fast');
			} else {
				$(this).removeClass('active');
				$(this).next().slideUp('fast');
			}
		});
	}
};

$(window).on('load', function(){
	Homepage.init();
});
