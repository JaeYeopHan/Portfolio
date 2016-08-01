$(document).ready(function(){
    $('.image1').hover(sizeTransform, sizeTransformReset);
    $('.image2').hover(sizeTransform, sizeTransformReset);
    $('.image3').hover(sizeTransform, sizeTransformReset);
    $('.image4').hover(sizeTransform, sizeTransformReset);

    function sizeTransform(){
        $(this).addClass('transition');
        $(this).siblings('div').css('right','0.3em');
        $(this).siblings('div').css('left','0.3em');
    }

    function sizeTransformReset(){
        $(this).removeClass('transition');
        $(this).siblings('div').css('right','1em');
        $(this).siblings('div').css('left','1em');
    }
});
