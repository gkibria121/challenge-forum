import React, { useState } from "react";

const RatingStars = ({ defaultRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(defaultRating);

  const isClickOnLeftHalf = (element, event) => {
    const rect = element.getBoundingClientRect();
    const midpoint = rect.left + rect.width / 2;
    return event.clientX < midpoint;
  };

  const ratings = [2, 4, 6, 8, 10];

  const handleRatingChange = (event) => {
    const star = event.target.closest(".ratings__rating");
    if (!star) return;

    const isLeft = isClickOnLeftHalf(star, event);
    const selectedRating = isLeft ? +star.dataset.rating - 1 : +star.dataset.rating;

    setRating(selectedRating);

    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div className="ratings" onMouseMove={handleRatingChange}>
      {ratings.map((ratingValue) => (
        <span
          key={ratingValue}
          className={`ratings__rating ${
            rating >= ratingValue
              ? "ratings__rating--fill"
              : rating === ratingValue - 1
              ? "ratings__rating--half-fill"
              : "ratings__rating--empty"
          }`}
          data-rating={ratingValue}
        />
      ))}
    </div>
  );
};

export default RatingStars;
