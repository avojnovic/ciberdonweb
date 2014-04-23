jQuery(document).ready(function ($) {

    htmlbody = $('html,body');


    function goToByScroll(dataslide) {

        var newHeight = $("#header").height();
        if (newHeight > 150) {
            newHeight = 0;
        }
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - newHeight
        }, 1000, 'easeInOutQuint');
    }


    $('.menu-button').click(function (e) {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

});