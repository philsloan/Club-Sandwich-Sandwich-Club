const starEl = $('.rating-container .star');

const handleStarClick = (event) => {
    const value = $(event.target).data('value');
    const user = $(event.target).data('user');
    $(event.target).siblings('.star').removeClass('active').css('color', 'green');
    $(event.target).prevAll('.star').addBack().addClass('active').css('color', 'orange');
}

starEl.click(handleStarClick);
