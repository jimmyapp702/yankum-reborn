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
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground">
              YANKUM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/products"
              className="inline-flex items-center justify-center h-10 px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              All Products
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center justify-center h-10 px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Learn
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center h-10 px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
            >
              Our Story
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
                    to="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/learn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Learn
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg uppercase tracking-wider py-2 border-b border-border"
                  >
                    Our Story
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
