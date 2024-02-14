const starEl = $('.rating-container .star');

const handleStarClick = (event) => {
    var value = $(event.target).data('value');
    $(event.target).siblings('.star').removeClass('active').css('color', 'green');
    $(event.target).prevAll('.star').addBack().addClass('active').css('color', 'orange');
}

starEl.click(handleStarClick);
