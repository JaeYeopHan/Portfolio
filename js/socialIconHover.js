$(document).ready(function(){
    var $nav = $('.navigation');
    
    $nav.on('mouseenter', transform);
    $nav.on('mouseleave', reset);

    function transform(){
        $nav.css('background-color','#FFF');
        $nav.children('span').css('background-color', '#FF305B');
    }

    function reset(){
        $nav.css('background-color','#000');
        $nav.children('span').css('background-color', '#FFF');
    }
});
