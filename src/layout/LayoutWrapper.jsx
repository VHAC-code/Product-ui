import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

/**
 * LayoutWrapper
 * Wraps all pages with consistent header/footer and layout styling.
 */
const LayoutWrapper = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col w-full">
      <Header />
      <main className="w-full pt-4 pb-10 px-4 md:px-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
