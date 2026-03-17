import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/hooks/use-scroll';
import { createPortal } from 'react-dom';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/messages', label: 'Messages' },
    { to: '/locations', label: 'Locations' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/giving', label: 'Giving' },
    { to: '/testimonies', label: 'Testimonies' },
    { to: '/contact', label: 'Contact' },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-black/50 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo - Haven Word Church */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/pictures/logo/20260103_114553_0000.png" 
              alt="Haven Word Church Logo"
              className={cn(
                "transition-all duration-300 rounded-full",
                scrolled ? "h-10 w-10" : "h-12 w-12"
              )}
            />
            <span className={cn(
              "font-bold text-white transition-all duration-300",
              scrolled ? "text-sm md:text-base" : "text-base md:text-lg"
            )}>
              Haven Word Church
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'text-white/70 hover:text-white hover:bg-white/10',
                  location.pathname === link.to && 'text-white bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={open} className="size-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open}>
        <nav className="flex flex-col gap-2 px-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={cn(
                'py-3 text-base font-medium text-white/70 hover:text-white transition-colors border-b border-white/10',
                location.pathname === link.to && 'text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </MobileMenu>
    </header>
  );
};

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-20',
        className
      )}
      {...props}
    >
      <div className="container mx-auto py-6">
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Header;
