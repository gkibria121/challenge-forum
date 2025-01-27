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
    const star = event.target.closest("[data-rating]");
    if (!star) return;

    const isLeft = isClickOnLeftHalf(star, event);
    const selectedRating = isLeft
      ? +star.dataset.rating - 1
      : +star.dataset.rating;
    setRating(selectedRating);

    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  const getStarClass = (ratingValue) => {
    const baseClasses = "block w-6 h-6 relative";

    if (rating >= ratingValue) {
      return `${baseClasses} bg-yellow-400 clip-star`;
    } else if (rating === ratingValue - 1) {
      return `${baseClasses} half-star clip-star`;
    } else {
      return `${baseClasses} bg-gray-300 clip-star`;
    }
  };

  return (
    <div
      className="mb-4 flex items-center justify-end gap-2"
      onMouseMove={handleRatingChange}
    >
      <style jsx>{`
        .clip-star {
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
        }
        .half-star {
          background: linear-gradient(to right, #facc15 50%, #d1d5db 50%);
        }
      `}</style>

      {ratings.map((ratingValue) => (
        <span
          key={ratingValue}
          className={getStarClass(ratingValue)}
          data-rating={ratingValue}
        />
      ))}
    </div>
  );
};

export default RatingStars;
