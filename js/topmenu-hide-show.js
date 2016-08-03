var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('.topmenu').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > 0){
        $('.top-menu').removeClass('scroll-up').addClass('scroll-down');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.top-menu').removeClass('scroll-down').addClass('scroll-up');
        }
    }
    lastScrollTop = st;
}
