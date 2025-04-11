import { useParams, useNavigate } from "react-router-dom";
import products from "../data/TestProduct";
import PriceTag from "../components/PriceTag";
import RatingStars from "../components/RatingStars";

/**
 * ProductDetail Page
 * Displays detailed information about a single product.
 * Uses route param `id` to locate the product from the mock data.
 * Includes "Add to Cart" button, responsive layout, and back navigation.
 */
const ProductDetail = () => {
  const { id } = useParams(); // get product id from URL
  const navigate = useNavigate(); // hook to navigate back

  // Find the product by ID from local data
  const product = products.find((p) => p.id === parseInt(id));

  // Handle case when product not found
  if (!product)
    return <p className="p-6 text-center text-xl">🚫 Product not found.</p>;

  return (
    <div className="w-full px-4 md:px-12">
      {/* 🔙 Back to Products */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition-all"
      >
        ← Back to Products
      </button>

      {/* 📦 Product Card Layout */}
      <div className="flex flex-col md:flex-row gap-8 bg-white/90 border border-slate-200 rounded-3xl shadow-xl p-6 backdrop-blur-md">
        {/* 📸 Image Section */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl w-full h-[300px] object-cover shadow-lg transition-transform hover:scale-105"
          />
        </div>

        {/* 📋 Product Info Section */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
              {product.name}
            </h1>

            <PriceTag price={product.price} />

            <RatingStars
              rating={product.rating}
              onChange={(newRating) => console.log("New Rating:", newRating)}
            />

            {/* 📝 Description Section */}
            <div className="mt-4 text-slate-600 leading-relaxed space-y-2">
              <p>
                Experience luxury with our exclusive{" "}
                <strong>{product.name}</strong>, crafted for style and comfort.
              </p>
              <p>
                Features include premium material, durable build, and a sleek
                modern design that makes it a perfect addition to your
                lifestyle.
              </p>
              <ul className="list-disc list-inside pl-2">
                <li>Available in multiple colors</li>
                <li>1-year warranty</li>
                <li>Free shipping & easy returns</li>
              </ul>
            </div>
          </div>

          {/* 🛒 Action Button */}
          <div>
            <button
              onClick={() => alert("Added to cart!")}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
