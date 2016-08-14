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