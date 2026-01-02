import { Gift, Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const bagIncludes = [
  'At least two t-shirts',
  'A hat, socks, gloves, or gift card',
  'Sticker bundle',
  'Surprise bonus items',
];

export function MysteryBagSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product details */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="bg-primary text-primary-foreground font-heading font-bold text-lg px-3 py-1">
                40X
              </span>
              <span className="font-heading text-2xl font-bold text-secondary-foreground">
                4,000 ENTRIES
              </span>
            </div>
            
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-secondary-foreground leading-tight mb-6">
              Mystery Bag
            </h2>
            
            <p className="text-3xl font-bold text-secondary-foreground mb-2">
              $99.99
            </p>
            <p className="text-secondary-foreground/70 mb-8">
              Shipping calculated at checkout
            </p>

            <div className="bg-secondary-foreground/10 rounded-lg p-6 mb-8">
              <p className="font-heading text-lg font-bold text-secondary-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                Every Bag Includes:
              </p>
              <ul className="space-y-3">
                {bagIncludes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-secondary-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="flex-1 font-heading font-bold uppercase tracking-wider gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="font-heading font-bold uppercase tracking-wider"
              >
                <Link to="/products">
                  View All Products
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary-foreground/10 to-secondary-foreground/5 rounded-lg flex items-center justify-center overflow-hidden">
              {/* Decorative pattern background */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 gap-4 p-8 rotate-12 scale-125">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <Gift key={i} className="h-6 w-6 text-secondary-foreground" />
                  ))}
                </div>
              </div>
              
              {/* Main content */}
              <div className="relative z-10 text-center">
                <div className="relative inline-block">
                  <Gift className="h-32 w-32 md:h-48 md:w-48 text-secondary-foreground/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-7xl md:text-9xl font-bold text-primary">?</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <span className="inline-flex items-baseline gap-2 bg-primary text-primary-foreground font-heading font-bold text-3xl md:text-4xl px-6 py-3">
                    40X
                    <span className="text-lg uppercase">Entries</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-secondary text-secondary-foreground p-4 rounded-lg">
              <p className="font-heading text-xs uppercase tracking-wider">USA Made</p>
              <p className="font-heading font-bold text-sm">Screen-Printed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
