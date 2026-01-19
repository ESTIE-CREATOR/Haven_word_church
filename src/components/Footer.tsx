
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 border-t border-gray-300">
      <div className="container-custom px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <Logo size="sm" showText={false} className="mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
              Haven Word Church - The Spread City
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/messages"
                  className="text-gray-700 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Messages
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-700 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4 text-gray-900">
              Contact Info
            </h3>
            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p>Haven Word Church</p>
              <p>The Spread City</p>
              <Link
                to="/locations"
                className="text-primary hover:underline inline-block mt-2"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-700">
            &copy; {new Date().getFullYear()} Haven Word Church. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              to="/privacy"
              className="text-xs sm:text-sm text-gray-700 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/disclaimer"
              className="text-xs sm:text-sm text-gray-700 hover:text-primary transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
