$(document).ready(function () {
    $('.rating-container .star').click(function () {
        var value = $(this).data('value');
        $(this).siblings('.star').removeClass('active').css('color', 'green');
        $(this).prevAll('.star').addBack().addClass('active').css('color', 'orange');
        
    });
});
