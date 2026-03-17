import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, MapPin, Info, Calendar, DollarSign, Phone, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { MobileSidebar, HamburgerIcon } from "./MobileSidebar";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Messages", url: "/messages", icon: MessageSquare },
  { name: "Locations", url: "/locations", icon: MapPin },
  { name: "About", url: "/about", icon: Info },
  { name: "Events", url: "/events", icon: Calendar },
  { name: "Giving", url: "/giving", icon: DollarSign },
  { name: "Testimonies", url: "/testimonies", icon: Heart },
  { name: "Contact", url: "/contact", icon: Phone },
];

export function TubelightHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const scrolled = useScroll(10);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/pictures/logo/20260103_114553_0000.png"
                alt="Haven Word Church Logo"
                className={cn(
                  "transition-all duration-300 rounded-full",
                  scrolled ? "h-9 w-9" : "h-10 w-10"
                )}
              />
              <span className="font-bold text-foreground text-sm md:text-base">
                Haven Word Church
              </span>
            </Link>

            {/* Desktop Navigation - Tubelight style */}
            <nav className="hidden lg:flex items-center gap-1 bg-muted/80 rounded-full px-2 py-1.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
                      "text-muted-foreground hover:text-foreground",
                      isActive && "text-primary"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="tubelight"
                        className="absolute inset-0 bg-background rounded-full shadow-sm border border-border -z-0"
                        initial={false}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <HamburgerIcon open={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)} />
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
