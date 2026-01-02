import { Check, ShoppingCart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroRopeImage from '@/assets/hero-kinetic-rope.png';

const ropeFeatures = [
  '7/8" diameter for maximum strength',
  '28,600 lbs break strength',
  '5,700 lbs working load limit',
  'Double-braided nylon construction',
];

export function FeaturedRopeSection() {
  const price = 199;
  const multiplier = 20;
  const entries = price * multiplier;

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product details */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="bg-primary text-primary-foreground font-heading font-bold text-lg px-3 py-1">
                {multiplier}X
              </span>
              <span className="font-heading text-2xl font-bold text-secondary-foreground">
                {entries.toLocaleString()} ENTRIES
              </span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              7/8" Kinetic Recovery Rope "Python"
            </h2>
            
            <p className="text-3xl font-bold text-secondary-foreground mb-2">
              ${price}
            </p>
            <p className="text-secondary-foreground/70 mb-8">
              Shipping calculated at checkout
            </p>

            <div className="bg-secondary-foreground/10 rounded-lg p-6 mb-8">
              <p className="font-heading text-lg font-bold text-secondary-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Premium Features:
              </p>
              <ul className="space-y-3">
                {ropeFeatures.map((item, index) => (
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
                className="font-heading font-bold uppercase tracking-wider border-secondary-foreground text-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <Link to="/products/kinetic-recovery-rope">
                  View Details
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary-foreground/10 to-secondary-foreground/5 rounded-lg flex items-center justify-center overflow-hidden p-8">
              <img 
                src={heroRopeImage}
                alt="7/8 inch Kinetic Recovery Rope Python"
                className="w-full h-full object-contain"
              />
              
              {/* Multiplier Badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-baseline gap-2 bg-primary text-primary-foreground font-heading font-bold text-3xl md:text-4xl px-6 py-3">
                  {multiplier}X
                  <span className="text-lg uppercase">Entries</span>
                </span>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-secondary border border-secondary-foreground/20 text-secondary-foreground p-4 rounded-lg">
              <p className="font-heading text-xs uppercase tracking-wider text-secondary-foreground/70">Proudly Made</p>
              <p className="font-heading font-bold text-sm flex items-center gap-2">
                In the USA 🇺🇸
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
