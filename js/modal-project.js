var $image = $('.image-description');
var $close = $('.modal-close');
var $modal;

$image.on('mouseup', function(event){
    var $eventTarget = $(event.currentTarget);
    $modal = $eventTarget.parent().prev();
    $modal.css('display','block');
});

$close.on('mouseup', function(){
    $modal.css('display','none');
});

//다른 곳 클릭 일단 보류
$(window).on('click', function(event){
    var $target = $(event.target);
    if ($target == $modal) {
        $modal.css('display','none');
    } else {
    }
});
