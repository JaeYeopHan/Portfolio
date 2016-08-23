$(document).ready(function(){
    // $(document).on('mousewheel.disalbewheel', scrollcontroler);

    $('.down-icon').on('click', 'a', scrollcontroler);

    $('.fixed-top-btn').on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    function scrollcontroler(event){
        event.preventDefault();
        var target = $(this); //li id=home1
        var topMenuHeight = $('.top-menu').height();
        $('html, body').animate({
            scrollTop: 80 + target.offset().top
        }, 700);
    }
});
