const newSandwichFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const bread = document.querySelector("#bread").value.trim();
  const condiment = document.querySelector("#condiment").value.trim();
  const meat = document.querySelector("#meat").value.trim();
  const vegetable = document.querySelector("#vegetable").value.trim();
  const cheese = document.querySelector("#cheese").value.trim();
  const other = document.querySelector("#other").value.trim();
  const image_link = document.querySelector("#image").value.trim();
  const user_id = document.querySelector("#name").getAttribute('data-id')

  if (user_id && name) {
    const response = await fetch("/api/sandwiches", {
      method: "POST",
      body: JSON.stringify({
        name,
        bread,
        condiment,
        meat,
        vegetable,
        cheese,
        other,
        image_link,
        user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      alert("Failed to add sandwich.");
    }
    document.location.replace("/");
}
};

document
  .querySelector("#sandwich-form")
  .addEventListener("submit", newSandwichFormHandler);
