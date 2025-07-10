

import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close after scroll
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Portfolio
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {["about", "skills", "experience", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors duration-200 capitalize text-sm lg:text-base"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden z-[60]">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
<div
  className={`absolute right-4 top-16 w-52 bg-slate-900/95 text-white rounded-lg shadow-xl border border-slate-700 backdrop-blur-md transition-opacity duration-300 md:hidden z-50 ${
    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
  <div className="flex flex-col p-4 space-y-3">
    {["about", "skills", "experience", "projects", "contact"].map((item) => (
      <button
        key={item}
        onClick={() => scrollToSection(item)}
        className="capitalize text-left hover:text-blue-400 transition"
      >
        {item}
      </button>
    ))}
  </div>
</div>

    </nav>
  );
};

export default Navigation;
