
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container-custom px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="sm" showText={false} className="mb-4" />
            <p className="text-gray-400 text-sm sm:text-base mb-3">
              Haven Word Church
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              The Spread City
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold font-serif mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/messages"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Messages
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonies"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Testimonies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold font-serif mb-4 text-white">
              Contact
            </h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div>
                <p className="text-gray-400 mb-1">Address</p>
                <p className="text-gray-300 text-sm">Opposite Gate 5, Adamasingba, Ibadan, Oyo State</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-gray-300">
                  <a href="mailto:havenwordchurch@gmail.com" className="hover:text-white transition-colors text-sm">
                    havenwordchurch@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <p className="text-gray-300 text-sm">
                  <a href="tel:+2348158884938" className="hover:text-white transition-colors">
                    +234 815 888 4938
                  </a>
                </p>
                <p className="text-gray-300 text-sm">
                  <a href="tel:+2349077469204" className="hover:text-white transition-colors">
                    +234 907 746 9204
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-base font-semibold font-serif mb-4 text-white">
              More
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
              <li>
              <Link
                to="/locations"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Get Directions
              </Link>
              </li>
              <li>
                <Link
                  to="/giving"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Giving
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Haven Word Church. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              to="/privacy"
              className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/disclaimer"
              className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
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
