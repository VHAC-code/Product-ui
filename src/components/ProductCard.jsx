import PriceTag from "./PriceTag";
import RatingStars from "./RatingStars";

/**
 * ProductCard Component
 * Displays a single product in card format.
 * Reusable across grid or list layouts.
 *
 * Props:
 *  - product (object): { id, name, image, price, rating }
 *  - onClick (function): Callback when the card is clicked (typically to navigate to detail page)
 */
const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="border rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer bg-white hover:-translate-y-1 hover:shadow-lg duration-200"
      onClick={() => onClick(product.id)}
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md transition-transform duration-200 hover:scale-105"
      />

      {/* Product Title */}
      <h3 className="mt-3 font-semibold text-lg text-slate-800">
        {product.name}
      </h3>

      {/* Product Price */}
      <PriceTag price={product.price} />

      {/* Rating Component (Editable) */}
      <RatingStars
        rating={product.rating}
        onChange={(newRating) => console.log("New Rating:", newRating)}
      />
    </div>
  );
};

export default ProductCard;
