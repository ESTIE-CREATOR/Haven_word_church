import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, MapPin, Info, Calendar, DollarSign, Phone, Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

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

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      {/* Sidebar panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-[280px] bg-background shadow-2xl",
          "transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <img
              src="/pictures/logo/20260103_114553_0000.png"
              alt="Haven Word Church Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-bold text-foreground text-sm">Haven Word Church</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.url;

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-muted",
                  isActive && "text-primary bg-primary/5 border-r-2 border-primary font-semibold"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Haven Word Church
          </p>
        </div>
      </div>
    </>,
    document.body
  );
}

// Animated hamburger icon
export function HamburgerIcon({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative p-2 rounded-lg hover:bg-muted transition-colors"
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className={cn(
            "block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 origin-center",
            open && "rotate-45 translate-y-[9px]"
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300",
            open && "opacity-0 scale-x-0"
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 origin-center",
            open && "-rotate-45 -translate-y-[9px]"
          )}
        />
      </div>
    </button>
  );
}
