import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
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
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/pictures/spread_city/20260103_114554_0001.png" 
              alt="Spread City Logo"
              className={cn(
                "transition-all duration-300",
                scrolled ? "h-10 w-10" : "h-12 w-12"
              )}
            />
            <span className={cn(
              "font-bold text-foreground transition-all duration-300",
              scrolled ? "text-lg" : "text-xl"
            )}>
              Spread City
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
                  'text-muted-foreground hover:text-foreground',
                  location.pathname === link.to && 'text-primary bg-primary/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
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
                'py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50',
                location.pathname === link.to && 'text-primary'
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
        'fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-20',
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
