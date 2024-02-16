const newSandwichHandler = async (event) => {
    userId = event.target.getAttribute("data-id");
    if (userId) {
        document.location.replace("/sandwich/newSandwich");
    } else {
        document.location.replace("/login");
    }
}

document.getElementById('new-sandwich-btn').addEventListener('click', newSandwichHandler);