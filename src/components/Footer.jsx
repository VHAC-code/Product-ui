/**
 * Footer Component
 * Shared footer for branding, links, or credits.
 * Responsive and minimal for clean layout integration.
 */

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 py-4 text-center text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-4">
        © {new Date().getFullYear()} MyStore. All rights reserved.
        <div className="mt-1">Made For Enjoying the Work.</div>
      </div>
    </footer>
  );
};

export default Footer;
