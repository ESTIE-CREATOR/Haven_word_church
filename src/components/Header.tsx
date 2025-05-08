
import { useState } from "react";
import { Link } from "react-router-dom";
import { Church, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Church className="h-8 w-8 text-church-700" />
            <span className="text-2xl font-serif font-semibold text-church-800">Faith In Focus</span>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/sermons">Sermons</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
              <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
              <MobileNavLink to="/sermons" onClick={toggleMenu}>Sermons</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-church-600 hover:text-church-800 font-medium transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="text-church-600 hover:text-church-800 font-medium py-2 border-b border-gray-100 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
