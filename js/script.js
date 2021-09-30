//js part//
(function($) {
    'use strict';
    
    $('.partners-logo').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            992:{
                items:4
            }
        }
    })

    $('.test-caro').owlCarousel({
        autoplay: true,
        loop:true,
        responsiveClass:true,
        items: 1
    })

//jquery part//
$(document).ready(function(){
	//1
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	})