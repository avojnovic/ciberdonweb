jQuery(document).ready(function ($)
{

    htmlbody = $('html,body');


    function goToByScroll(dataslide)
    {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1000, 'easeInOutQuint');
    }

    
    $('.menu-button').click(function (e)
    {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

});