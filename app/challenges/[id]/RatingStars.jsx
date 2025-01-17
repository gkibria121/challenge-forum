// RatingStars.jsx
const RatingStars = () => {
  const isClickOnLeftHalf = (element, event) => {
    const rect = element.getBoundingClientRect();
    const midpoint = rect.left + rect.width / 2;
    return event.clientX < midpoint;
  };
  const ratings = [2, 4, 6, 8, 10];
  const updateRatingClasses = (selectedRating) => {
    const ratingsContainer = document.querySelector(".ratings");
    const ratingElements = Array.from(ratingsContainer.children);

    ratingElements.forEach((ratingEl) => {
      const ratingValue = +ratingEl.dataset.rating;
      let newClass;

      if (selectedRating >= ratingValue) {
        newClass = "ratings__rating ratings__rating--fill";
      } else if (selectedRating === ratingValue - 1) {
        newClass = "ratings__rating ratings__rating--half-fill";
      } else {
        newClass = "ratings__rating ratings__rating--empty";
      }

      ratingEl.className = newClass;
    });
  };

  const handleRatingChange = (event) => {
    const star = event.target.closest(".ratings__rating");
    if (!star) return;
    const isLeft = isClickOnLeftHalf(star, event);
    const selectedRating = isLeft ? +star.dataset.rating - 1 : +star.dataset.rating;
    updateRatingClasses(selectedRating);
    setRating(selectedRating);
  };
  return (
    <div className="ratings" onMouseMove={handleRatingChange}>
      {ratings.map((ratingValue) => (
        <span
          key={ratingValue}
          className="ratings__rating ratings__rating--fill"
          data-rating={ratingValue}
        />
      ))}
    </div>
  );
};

export default RatingStars;
