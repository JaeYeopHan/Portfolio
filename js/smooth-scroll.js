$(document).ready(function(){
    $('.down-icon').on('click', 'a', function(event){
        event.preventDefault();
        var target = $(this); //li id=home1
        var topMenuHeight = $('.top-menu').height();
        var offsetTop = target.offset().top - topMenuHeight;
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 700);
    });

    $('.fixed-top-btn').on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});
