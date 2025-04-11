import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import LayoutWrapper from "./layout/LayoutWrapper"; // 🧱 Wraps pages with header/footer

/**
 * App Component
 * Main routing configuration wrapped with LayoutWrapper for consistent UI.
 */
const App = () => {
  return (
    <Router>
      <Routes>
        {/* 🧱 Common layout (Header + Footer) for all pages */}
        <Route element={<LayoutWrapper />}>
          {/* 🏠 Home page: product listing with filters */}
          <Route path="/" element={<Home />} />

          {/* 📦 Product detail page: shows selected product info */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Future Routes:
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
