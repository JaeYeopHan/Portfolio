$(document).ready(function(){

    var $nav = $('.navigation');
    var $navlogo = $('.nav-logo');

    $nav.on('click', visible)
        .on('click', transformMenu);
    $navlogo.on('click', visible);

    function transformMenu(){
        if($('h1').css('visibility') == 'visible'){
            $('.top-menu').css('background-color', 'transparent');
            $('h1').css('visibility', 'hidden');
            $nav.children('.nav-trigger-mid').fadeOut(400);
            $nav.children('.nav-trigger-top').css('top', '15px');
            $nav.children('.nav-trigger-btm').css('top', '15px');
            $nav.children('.nav-trigger-top').css('transform', 'rotate(45deg)');
            $nav.children('.nav-trigger-btm').css('transform', 'rotate(-45deg)');

        } else {
            $('.top-menu').css('background-color', '#F2F2F2');
            $('h1').css('visibility', 'visible');
            $nav.children('.nav-trigger-top').css('top', '9px');
            $nav.children('.nav-trigger-btm').css('top', '21px');
            $nav.children('.nav-trigger-top').css('transform', 'rotate(0deg)');
            $nav.children('.nav-trigger-btm').css('transform', 'rotate(0deg)');
            $nav.children('.nav-trigger-mid').fadeIn(300);
        }
    }

    function visible(){
        if($('#navigation-visible').css('left') == '-2000px'){
            $('#navigation-visible').animate({
                    left:'15px'
                },300
            );
        } else {
            $('#navigation-visible').animate({
                    left:'-2000px'
                },300
            );
        }
    }

});
