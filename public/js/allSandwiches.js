const starEl = $('.rating-container .star');

const handleStarClick = async (event) => {
    const value = $(event.target).data('value');
    const raterId = await $(event.target).data('rater');
    const sandwichId = $(event.target).data('id');

    $(event.target).siblings('.star').removeClass('active').css('color', 'green');
    $(event.target).prevAll('.star').addBack().addClass('active').css('color', 'orange');
    if (value && raterId && sandwichId) {
        const response = await fetch(`/api/ratings/${sandwichId}`, {
          method: "POST",
          body: JSON.stringify({ value, raterId }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
          document.location.replace("/");
        } else {
          alert("Failed to post rating.");
        }
      }
  
}

starEl.click(handleStarClick);
