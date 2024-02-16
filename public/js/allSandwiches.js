const starEl = $(".rating-container .star");

const handleStarClick = async (event) => {
  const value = $(event.target).data("value");
  const raterId = await $(event.target).data("rater");
  const sandwichId = $(event.target).data("id");

  $(event.target).siblings(".star").removeClass("active").css("color", "green");
  $(event.target).prevAll(".star").addBack().addClass("active").css("color", "orange");

  if (value && raterId && sandwichId) {
    let ratingId;

    const getResponse = await fetch('/api/ratings');
    const ratings = await getResponse.json();

    ratings.forEach(rating => {
      if (rating.user_id === raterId && rating.sandwich_id === sandwichId) {
        ratingId = rating.id;
        return;
      }
    });

    if (ratingId) {
      const putResponse = await fetch(`/api/ratings/${ratingId}`, {
        method: "PUT",
        body: JSON.stringify({rating: value}),
        headers: { "Content-Type": "application/json" },
      })

      if (!putResponse.ok) {
        alert("Failed to update rating.");
      }
    } else {
      const postResponse = await fetch(`/api/ratings/${sandwichId}`, {
        method: "POST",
        body: JSON.stringify({ value, raterId }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!postResponse.ok) {
        alert("Failed to post rating.");
      }
    }
  }
};

starEl.click(handleStarClick);
