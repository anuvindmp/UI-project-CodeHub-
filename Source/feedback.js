document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
        star.addEventListener("click", () => {
            const rating = star.getAttribute("data-rating");
            updateStars(rating);
        });
    });

    function updateStars(selectedRating) {
        stars.forEach((star) => {
            const starRating = star.getAttribute("data-rating");
            if (starRating <= selectedRating) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }
});