import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useCart, useCollections } from '@/hooks/useShopify';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: cartData } = useCart();
  const { data: collectionsData } = useCollections();

  const collections = collectionsData?.collections.edges.map(e => e.node) || [];
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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading text-sm uppercase tracking-wider bg-transparent">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/collections"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-heading font-semibold uppercase">All Collections</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our complete range of recovery gear
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {collections.slice(0, 6).map((collection) => (
                      <li key={collection.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/collections/${collection.handle}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{collection.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
                >
                  All Products
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/learn"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
                >
                  Learn
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary"
                >
                  Our Story
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
                  <div className="space-y-2">
                    <span className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
                      Collections
                    </span>
                    {collections.map((collection) => (
                      <Link
                        key={collection.id}
                        to={`/collections/${collection.handle}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 pl-4 text-foreground/80 hover:text-foreground"
                      >
                        {collection.title}
                      </Link>
                    ))}
                  </div>
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
