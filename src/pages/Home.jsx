import { useState } from "react";
import products from "../data/TestProduct.js";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { useNavigate } from "react-router-dom";

/**
 * Home Page
 * Displays the main product listing with filtering.
 * Integrates sidebar for category filter and product grid layout.
 */
const Home = () => {
  // Category selected by the user (default: All)
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Navigation hook from react-router-dom to redirect to product detail page
  const navigate = useNavigate();

  // Filter products based on selected category
  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Sidebar for filters */}
      <FilterSidebar setSelectedCategory={setSelectedCategory} />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={(id) => navigate(`/product/${id}`)} // navigate to detail view
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
