$(document).ready(function(){

    $('.picture-animation1').hover(sizeTransform, sizeTransformReset);
    $('.picture-animation2').hover(sizeTransform, sizeTransformReset);
    $('.picture-animation3').hover(sizeTransform, sizeTransformReset);
    $('.picture-animation4').hover(sizeTransform, sizeTransformReset);

    function sizeTransform(){
        $(this).children('div').addClass('transition');
    }

    function sizeTransformReset(){
        $(this).children('div').removeClass('transition');
    }
});
