import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";

const StarRating = ({ rating }) => {
  const filledStars = Math.round(rating); // Round the rating to the nearest whole number
  const totalStars = 5; // Total number of stars

  return (
    <div className="flex">
  
      {Array.from({ length: totalStars }, (_, index) =>
        index < filledStars ? (
          <GoStarFill key={index} className="text-yellow-400" />
        ) : (
          <FiStar key={index} className="text-yellow-400" />
        )
      )}
    </div>
  );
};
export default StarRating