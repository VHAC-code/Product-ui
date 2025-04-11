/**
 * PriceTag Component
 * Displays a formatted price in INR with styling.
 * Can be extended later to support discounts, currency switch, or internationalization (i18n).
 *
 * Props:
 *  - price (number): The product price in INR (₹)
 */

const PriceTag = ({ price }) => {
  return (
    <p className="text-green-600 font-bold text-md mt-1">
      ₹{price.toLocaleString("en-IN")}
    </p>
  );
};

export default PriceTag;
