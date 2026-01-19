
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/messages", label: "Messages" },
    { to: "/locations", label: "Locations" },
    { to: "/about", label: "About" },
    { to: "/events", label: "Events" },
    { to: "/giving", label: "Giving" },
    { to: "/testimonies", label: "Testimonies" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 px-2 sm:px-4 pt-2">
      <div
        className={`rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 ${
          isScrolled
            ? "px-2 sm:px-3 py-1 sm:py-1.5"
            : "px-3 sm:px-4 py-2 sm:py-2.5"
        }`}
        style={{
          backgroundColor: "rgba(229, 231, 235, 0.95)",
          backdropFilter: "blur(10px)",
          borderColor: "rgba(0, 0, 0, 0.1)",
          borderWidth: "1px",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`transition-transform duration-300 ${
              isScrolled ? "scale-75 sm:scale-85" : "scale-90 sm:scale-95"
            }`}
          >
            <Logo size="sm" showText={false} />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-900"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center ml-auto transition-all duration-300 ${
              isScrolled ? "gap-2 xl:gap-3" : "gap-3 xl:gap-5"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-gray-900 hover:text-primary font-medium transition-colors duration-200 ${
                  isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
                } ${location.pathname === link.to ? "text-primary" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="lg:hidden mt-2 rounded-lg px-4 py-3 sm:py-4"
            style={{
              backgroundColor: "rgba(229, 231, 235, 0.95)",
            }}
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-gray-900 hover:text-primary font-medium py-1 text-sm sm:text-base transition-colors duration-200 ${
                    location.pathname === link.to ? "text-primary" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
