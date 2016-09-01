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

	$('.slider-popular').slick({
		dots: true,
		appendDots: '.slider-dots-p',
		prevArrow: '.prev-p',
		nextArrow: '.next-p'
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


	var mobileWidth = 960;
	var Page = {
		init: function(){
			this.carouselResize();
		},
		carouselResize: function(){
			if($(window).width() <= mobileWidth){
				if($('.slider-popular').hasClass('slick-initialized')){
					$('.slider-popular').slick('unslick');
				}
			} else {
				if(!$('.slider-popular').hasClass('slick-inititialized')) {
					$('.slider-popular').slick({
						dots: true,
						appendDots: '.slider-dots-p',
						prevArrow: '.prev-p',
						nextArrow: '.next-p'
					});
				}
			}
		}
	};

	var menu = {
		init: function(){
			this.btnMenu();
		},
		btnMenu: function() {
			$('.holder-btn-menu').on('click', function(){
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

	menu.init();

	Homepage.init();

	Page.init();

	$(window).on('resize', function(){
		Page.carouselResize();
	});
});


