
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    console.log("Scrolling to:", sectionId); // Debug log
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    console.log("Toggle menu clicked, current state:", isMobileMenuOpen); // Debug log
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = ["about", "skills", "experience", "projects", "contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Portfolio
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors duration-200 capitalize text-sm lg:text-base"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-slate-800/50 p-2 z-50"
                  onClick={toggleMobileMenu}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[350px] bg-slate-900 border-slate-700 z-[100] opacity-100"
                style={{ zIndex: 100 }}
              >
                <div className="flex flex-col space-y-4 mt-8 opacity-100">
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-left opacity-100"
                  >
                    Portfolio
                  </button>
                  <div className="border-t border-slate-700 pt-4 opacity-100">
                    {navigationItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item)}
                        className="block w-full text-left py-3 px-2 text-lg capitalize text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200 opacity-100"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
