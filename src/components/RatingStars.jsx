import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

/**
 * RatingStars Component
 * Renders interactive star ratings and allows user to change rating if `onChange` is passed.
 * Displays fractional ratings with half-star precision.
 *
 * Props:
 *  - rating (number): Current rating value (e.g. 4.5)
 *  - onChange (function): Optional callback for when user selects a new rating
 */
const RatingStars = ({ rating = 0, onChange = () => {} }) => {
  const [hoverRating, setHoverRating] = useState(0); // temporary rating while hovering

  /**
   * Called when a star is clicked
   * @param {number} index - New rating selected
   */
  const handleClick = (index) => {
    onChange(index);
  };

  /**
   * Returns appropriate star icon (full, half, or empty)
   * @param {number} index - Star position
   * @returns JSX Icon
   */
  const getStarIcon = (index) => {
    const current = hoverRating || rating;

    if (current >= index) return <FaStar />;
    if (current >= index - 0.5) return <FaStarHalfAlt />;
    return <FaRegStar />;
  };

  return (
    <div className="flex items-center gap-2 mt-1">
      {/* Star Icons */}
      <div className="flex text-yellow-400 text-lg cursor-pointer">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            onClick={() => handleClick(i)}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {getStarIcon(i)}
          </span>
        ))}
      </div>

      {/* Numerical Rating */}
      <span className="text-gray-600 text-sm">{rating.toFixed(1)} / 5</span>
    </div>
  );
};

export default RatingStars;
