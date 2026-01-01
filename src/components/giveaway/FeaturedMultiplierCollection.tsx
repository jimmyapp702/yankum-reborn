import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MULTIPLIER = 20;

const featuredProducts = [
  {
    id: '1',
    name: '7/8" Kinetic Rope',
    price: 329,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    name: '1" Kinetic Rope',
    price: 449,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    name: 'Recovery Kit Pro',
    price: 599,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    name: 'Soft Shackle Set',
    price: 89,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
];

export function FeaturedMultiplierCollection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 text-sm font-heading font-bold mb-3">
              {MULTIPLIER}X ENTRIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              FEATURED PRODUCTS
            </h2>
            <p className="text-muted-foreground mt-2">
              Shop these products for 20X the entries. Limited time only.
            </p>
          </div>
          <Link 
            to="/collections" 
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:underline"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const entries = product.price * MULTIPLIER;
            return (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-square bg-muted overflow-hidden mb-4">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-heading font-bold">
                    {MULTIPLIER}X
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-muted-foreground">${product.price}</span>
                  <span className="text-primary font-heading font-bold text-sm">
                    {entries.toLocaleString()} entries
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
