smoothScroll.init();

$("#all").click(function(){
    $(".foto").show();
    $(".website").show();
    $(this).addClass("active");
    $("#websites").removeClass("active");
    $("#fotos").removeClass("active");
});

$("#websites").click(function(){
    $(".foto").fadeOut(1000);
    $(".website").show();
    $(this).addClass("active");
    $("#all").removeClass("active");
    $("#fotos").removeClass("active");
});

$("#fotos").click(function(){
    $(".foto").show();
    $(".website").fadeOut(1000);
    $(this).addClass("active");
    $("#websites").removeClass("active");
    $("#all").removeClass("active");
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var header = $(".navbar");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
        header.removeClass('navbar-transparent');
    } else {
        header.addClass('navbar-transparent');
    }
});

(function($) {
    var $window = $(window);

    $window.resize(function resize() {
        if ($window.width() > 1440) {
            $(".container-fluid").removeClass("container-fluid").addClass("container");
        } else {
            $(".container").removeClass("container-fluid");
        }
    }).trigger('resize');
})(jQuery);
