'use strict';
$('#oMnie').on('click', function(){

        $('html, body').animate({
            scrollTop: $("#firstSectionArchor").offset().top
        }, 1000);
})

$('#portfolio').on('click', function(){

        $('html, body').animate({
            scrollTop: $("#secondSectionArchor").offset().top
        }, 1000);
})

$('#kontakt').on('click', function(){

        $('html, body').animate({
            scrollTop: $("#thirdSectionArchor").offset().top
        }, 1000);
})

$('#cos').on('click', function(){

        $('html, body').animate({
            scrollTop: $("#forthSectionArchor").offset().top
        }, 1000);
})