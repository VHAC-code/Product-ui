// import { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";

// const FilterSidebar = ({ setSelectedCategory }) => {
//   const categories = ["All", "Furniture", "Accessories", "Electronics"];
//   const [active, setActive] = useState("All");
//   const [open, setOpen] = useState(false); // for mobile drawer

//   const handleClick = (cat) => {
//     setActive(cat);
//     setSelectedCategory(cat);
//     setOpen(false); // close sidebar on selection (for mobile)
//   };

//   return (
//     <>
//       {/* Mobile toggle button */}
//       <div className="md:hidden mb-4">
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
//         >
//           <HiMenuAlt3 className="text-2xl" />
//           <span className="font-medium">Filters</span>
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`
//           md:sticky md:top-4 md:h-fit md:w-64
//           bg-gradient-to-b from-white via-slate-50 to-slate-100
//           border rounded-2xl p-5 shadow-lg
//           max-h-[90vh] overflow-y-auto custom-scrollbar transition-all duration-300
//           ${open ? "block" : "hidden"} md:block
//         `}
//       >
//         <h4 className="font-bold text-xl mb-4 text-slate-800">Categories</h4>
//         <ul className="flex md:flex-col flex-wrap gap-2 md:gap-3">
//           {categories.map((cat) => (
//             <li
//               key={cat}
//               onClick={() => handleClick(cat)}
//               className={`px-4 py-2 rounded-full md:rounded-lg cursor-pointer transition-all font-medium
//                 ${
//                   active === cat
//                     ? "bg-slate-800 text-white shadow-sm"
//                     : "bg-white text-slate-700 hover:bg-slate-200"
//                 }`}
//             >
//               {cat}
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </>
//   );
// };

// export default FilterSidebar;

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

/**
 * FilterSidebar Component
 * A responsive, scrollable sidebar to filter products by category.
 * Supports both mobile (toggle drawer) and desktop (sticky sidebar).
 *
 * Props:
 *  - setSelectedCategory (function): Updates the selected product category.
 */
const FilterSidebar = ({ setSelectedCategory }) => {
  // List of available product categories
  const categories = ["All", "Furniture", "Accessories", "Electronics"];

  // Local state to manage active category and mobile menu toggle
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);

  /**
   * Handle category selection
   * - Updates active category
   * - Calls parent update function
   * - Closes mobile sidebar if open
   */
  const handleClick = (cat) => {
    setActive(cat);
    setSelectedCategory(cat);
    setOpen(false); // Close drawer on mobile
  };

  return (
    <>
      {/* 🔘 Mobile Toggle Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
        >
          <HiMenuAlt3 className="text-2xl" />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      {/* 🧱 Sidebar Panel */}
      <aside
        className={`
          md:sticky md:top-4 md:h-fit md:w-64 
          bg-gradient-to-b from-white via-slate-50 to-slate-100 
          border rounded-2xl p-5 shadow-lg 
          max-h-[90vh] overflow-y-auto custom-scrollbar transition-all duration-300
          ${open ? "block" : "hidden"} md:block
        `}
      >
        <h4 className="font-bold text-xl mb-4 text-slate-800">Categories</h4>

        {/* 🗂️ Category List */}
        <ul className="flex md:flex-col flex-wrap gap-2 md:gap-3">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => handleClick(cat)}
              className={`px-4 py-2 rounded-full md:rounded-lg cursor-pointer transition-all font-medium 
                ${
                  active === cat
                    ? "bg-slate-800 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default FilterSidebar;
