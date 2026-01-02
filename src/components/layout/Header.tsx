import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/hooks/useShopify';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import yankumLogo from '@/assets/yankum-logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: cartData } = useCart();

  const cartItemCount = cartData?.cart?.lines.edges.reduce((sum, e) => sum + e.node.quantity, 0) || 0;

  const navLinks = [
    { to: '/products/kinetic-recovery-rope', label: 'Kinetic Ropes' },
    { to: '/collections/shackles', label: 'Soft Shackles' },
    { to: '/collections/recovery-kits', label: 'Recovery Kits' },
    { to: '/collections/winchline-accessories', label: 'Winching' },
    { to: '/collections/recovery-tools', label: 'Recovery Tools' },
    { to: '/giveaway', label: 'Giveaway' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container-wide">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={yankumLogo} 
              alt="Yankum Ropes" 
              className="h-7 sm:h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center justify-center h-10 px-3 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link 
              to="/cart" 
              className="relative p-2.5 sm:p-2 hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:-top-1 sm:-right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px]">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="font-heading text-xl">Menu</SheetTitle>
                    </div>
                  </SheetHeader>
                  <nav className="flex-1 overflow-y-auto py-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center min-h-[56px] px-6 font-heading text-base uppercase tracking-wider border-b border-border active:bg-muted transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-6 border-t border-border">
                    <Button asChild className="w-full min-h-[52px] text-base">
                      <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
                        Shop All Products
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
