
// RatingStars.jsx
const RatingStars = ({ ratings, onRatingChange }) => (
    <div className="ratings" onMouseMove={onRatingChange}>
      {ratings.map((ratingValue) => (
        <span
          key={ratingValue}
          className="ratings__rating ratings__rating--fill"
          data-rating={ratingValue}
        />
      ))}
    </div>
  );
  

export default RatingStars;