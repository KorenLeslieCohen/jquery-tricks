// initially hidden
$('#progress').hide();

// progress bar fade in
(function($) {
    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#progress').fadeIn(500);
            } else {
                $('#progress').fadeOut(500);
            }
        });
    });
})(jQuery);

// progress bar progress
var bar = $('#progress'),
    $window = $(window),
    docHeight = $(document).height(),
    baseX = $window.height() / docHeight * 100;
bar.css('background', '-webkit-linear-gradient(left, pink '+ baseX +'%, white '+ baseX +'%)');
$window.scroll(function(e) {      
    var x = $window.scrollTop() / docHeight * 100 + baseX;
    bar.css('background', '-webkit-linear-gradient(left, pink '+ x +'%, white '+ x +'%)');
});