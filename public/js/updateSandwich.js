const updateSandwichFormHandler = async (event) => {
    event.preventDefault();
  
    console.log(event.target);
    const sandwichId = event.target.getAttribute("data-id");
    const name = document.querySelector("#name").value.trim();
    const bread = document.querySelector("#bread").value.trim();
    const condiment = document.querySelector("#condiment").value.trim();
    const meat = document.querySelector("#meat").value.trim();
    const vegetable = document.querySelector("#vegetable").value.trim();
    const cheese = document.querySelector("#cheese").value.trim();
    const other = document.querySelector("#other").value.trim();
    let image_link = document.querySelector("#image").value.trim();
    if (!image_link) {
      image_link = "../images/no-sandwich-image.jpg"
    }
  
    console.log("Sandwich ID: ", sandwichId);
    if (name) {
      const response = await fetch(`/api/sandwiches/${sandwichId}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          bread,
          condiment,
          meat,
          vegetable,
          cheese,
          other,
          image_link,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        alert("Failed to update sandwich.");
      }
      document.location.replace("/");
  }
  };
  
  document
    .querySelector("#update-sandwich-form")
    .addEventListener("submit", updateSandwichFormHandler);