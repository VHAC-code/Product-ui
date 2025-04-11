import { Link } from "react-router-dom";

/**
 * Header
 * Simple top navigation bar with branding or links.
 */
const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="w-full max-w-full px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          🛍️ MyStore
        </Link>
        <nav>
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Products
          </Link>
          {/* Add more nav links here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
