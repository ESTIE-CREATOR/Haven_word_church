import { useState, useEffect } from 'react'
import { Home, MessageSquare, MapPin, Info, Calendar, DollarSign, Phone, Menu, X } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"

/**
 * Alternative Header component using the Tubelight Navbar
 * Shows hamburger menu on mobile, navbar on desktop
 */
export function TubelightHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Messages', url: '/messages', icon: MessageSquare },
    { name: 'Locations', url: '/locations', icon: MapPin },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Giving', url: '/giving', icon: DollarSign },
    { name: 'Events', url: '/events', icon: Calendar },
    { name: 'Contact', url: '/contact', icon: Phone },
  ]

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="relative">
      {/* Desktop: Tubelight Navbar */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>

      {/* Mobile: Hamburger Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 overflow-x-hidden max-w-full">
        <div className="flex items-center justify-between px-2 sm:px-4 py-3 max-w-full">
          <Link to="/" className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
            <img 
              src="/pictures/logo/20260103_114553_0000.png" 
              alt="Haven Word Church Logo"
              className="h-8 w-8 rounded-full flex-shrink-0"
            />
            <span className="font-bold text-white text-xs sm:text-sm truncate">Haven Word Church</span>
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen ? createPortal(
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-16"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="container mx-auto py-6 px-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.url
                
                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 py-4 px-4 text-base font-medium text-white/70 hover:text-white transition-colors border-b border-white/10",
                      isActive && "text-white bg-white/10"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>,
        document.body
      ) : null}
    </header>
  )
}
