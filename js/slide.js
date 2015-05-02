(function($){
    var viewText = $("div.all-text"),
    divs = viewText.find('div.texts'),
    divW = 313,
    divsLen = divs.length,
    totalDivsW = divW * divsLen,
    current = 1;
    $("div.slider-text").css('overflow','hidden');

    $("#show").show().find('button')
        .on('click',function(){
           var direction = $(this).attr('id');
           var position = divW;
            (direction === 'next') ? ++current : --current;
            if(current === 0){
                current = divsLen;
                direction = 'next';
                position = totalDivsW - divW;
            } else if (current-1 === divsLen){
                current = 1;
                position = 0;
            }
            doIt(viewText, position, direction);
        });

    function doIt(container, position, direction){
        var sign;
        if(direction && position !==0){
            sign = (direction === 'next')? '-=':'+=';
        }
        container.animate({
            'margin-left': sign ? (sign+position) : position
        });
    }
})(jQuery);
