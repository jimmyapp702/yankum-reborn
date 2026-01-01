import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/hooks/useShopify';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import yankumLogo from '@/assets/yankum-logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: cartData } = useCart();

  const cartItemCount = cartData?.cart?.lines.edges.reduce((sum, e) => sum + e.node.quantity, 0) || 0;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container-wide">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={yankumLogo} 
              alt="Yankum Ropes" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/products/kinetic-recovery-rope"
              className="inline-flex items-center justify-center h-10 px-3 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Kinetic Ropes
            </Link>
            <Link
              to="/collections/shackles"
              className="inline-flex items-center justify-center h-10 px-3 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Soft Shackles
            </Link>
            <Link
              to="/collections/recovery-kits"
              className="inline-flex items-center justify-center h-10 px-3 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Recovery Kits
            </Link>
            <Link
              to="/collections/winchline-accessories"
              className="inline-flex items-center justify-center h-10 px-3 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Winching
            </Link>
            <Link
              to="/collections/recovery-tools"
              className="inline-flex items-center justify-center h-10 px-3 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Recovery Tools
            </Link>
            <Link
              to="/giveaway"
              className="inline-flex items-center justify-center h-10 px-3 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Giveaway
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link to="/cart" className="relative p-2 hover:text-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="font-heading text-2xl">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <Link
                    to="/products/kinetic-recovery-rope"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Kinetic Ropes
                  </Link>
                  <Link
                    to="/collections/shackles"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Soft Shackles
                  </Link>
                  <Link
                    to="/collections/recovery-kits"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Recovery Kits
                  </Link>
                  <Link
                    to="/collections/winchline-accessories"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Winching
                  </Link>
                  <Link
                    to="/collections/recovery-tools"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Recovery Tools
                  </Link>
                  <Link
                    to="/giveaway"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Giveaway
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
