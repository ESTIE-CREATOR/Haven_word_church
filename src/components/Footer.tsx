
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/80">
      <div className="container-custom px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Logo size="sm" showText={false} className="mb-4" />
            <p className="text-primary-foreground/90 text-sm sm:text-base mb-3">
              Haven Word Church
            </p>
            <p className="text-primary-foreground/70 text-xs sm:text-sm">
              The Spread City
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold font-serif mb-4 text-primary-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/messages"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  Messages
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonies"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  Testimonies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="order-3">
            <h3 className="text-base font-semibold font-serif mb-4 text-primary-foreground">
              Contact
            </h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div>
                <p className="text-primary-foreground/70 mb-1">Address</p>
                <p className="text-primary-foreground/90 text-sm">Opposite Gate 5, Adamasingba, Ibadan, Oyo State</p>
              </div>
              <div>
                <p className="text-primary-foreground/70 mb-1">Email</p>
                <p className="text-primary-foreground/90">
                  <a href="mailto:havenwordchurch@gmail.com" className="hover:text-primary-foreground transition-colors text-sm">
                    havenwordchurch@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-primary-foreground/70 mb-1">Phone</p>
                <p className="text-primary-foreground/90 text-sm">
                  <a href="tel:+2348158884938" className="hover:text-primary-foreground transition-colors">
                    +234 815 888 4938
                  </a>
                </p>
                <p className="text-primary-foreground/90 text-sm">
                  <a href="tel:+2349077469204" className="hover:text-primary-foreground transition-colors">
                    +234 907 746 9204
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 order-4">
            <h3 className="text-base font-semibold font-serif mb-4 text-primary-foreground">
              More
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
              <li>
              <Link
                to="/locations"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Get Directions
              </Link>
              </li>
              <li>
                <Link
                  to="/giving"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                >
                  Giving
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Haven Word Church. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              to="/privacy"
              className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/disclaimer"
              className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
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
