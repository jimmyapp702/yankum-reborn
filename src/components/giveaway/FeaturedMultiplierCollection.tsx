import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    name: '1" Kinetic Recovery Rope',
    price: '$329',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    multiplier: '5X',
    slug: '/products/kinetic-rope-1',
  },
  {
    name: 'Soft Shackle Set',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1609668528780-e364738d8c4b?auto=format&fit=crop&w=600&q=80',
    multiplier: '3X',
    slug: '/products/soft-shackle-set',
  },
  {
    name: 'Premium Recovery Kit',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80',
    multiplier: '10X',
    slug: '/products/premium-recovery-kit',
  },
  {
    name: 'Tree Saver Strap',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1533591917954-27ebe5af4679?auto=format&fit=crop&w=600&q=80',
    multiplier: '2X',
    slug: '/products/tree-saver-strap',
  },
];

export function FeaturedMultiplierCollection() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Limited Time</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
              BONUS ENTRY PRODUCTS
            </h2>
            <p className="text-secondary-foreground/70 text-lg mt-3 max-w-xl">
              Shop these featured products and earn bonus multiplied entries toward the giveaway. The more you shop, the better your chances.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            <Link to="/collections">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Link 
              key={index}
              to={product.slug}
              className="group relative bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Multiplier badge */}
              <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1.5 font-heading font-bold text-lg flex items-center gap-1">
                <Zap className="w-4 h-4" />
                {product.multiplier}
              </div>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-secondary-foreground/10">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-secondary-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-heading font-bold text-primary">{product.price}</span>
                  <span className="text-xs text-secondary-foreground/60 uppercase tracking-wider">
                    {product.multiplier} Entries
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-12 bg-primary/10 border border-primary/20 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <p className="font-heading font-bold text-secondary-foreground text-lg">
                Every $1 = 20 Base Entries
              </p>
              <p className="text-secondary-foreground/70 text-sm">
                Multipliers stack on top of base entries. A 5X product means 100 entries per $1!
              </p>
            </div>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold uppercase tracking-wider whitespace-nowrap">
            <Link to="/collections">
              Shop Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
