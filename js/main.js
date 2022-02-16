$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        $('.current').css('animation', 'animation 1s alternate ');


    })

})


$('.toggle_points li').click(function (e) {
    $('img.glasses.active').fadeOut().removeClass('active');
    $( '#' + $(this).data('toggleTarget') ).fadeIn().toggleClass('active');
});



$(window).resize(function () {

    if ($(window).width() <= 768) {

        $('.tab-content').removeClass('current');
   

    }

});
$('.back-btn').click(function (e) {
    $('.tab-content').removeClass('current');
});
