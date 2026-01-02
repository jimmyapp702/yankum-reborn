import { ArrowRight, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const entryPackages = [
  {
    tier: 'Bronze',
    price: 25,
    entries: 50,
    color: 'bg-amber-700',
    textColor: 'text-amber-100',
    borderColor: 'border-amber-600',
  },
  {
    tier: 'Silver',
    price: 50,
    entries: 250,
    color: 'bg-gray-400',
    textColor: 'text-gray-900',
    borderColor: 'border-gray-300',
    popular: false,
  },
  {
    tier: 'Gold',
    price: 100,
    entries: 1000,
    color: 'bg-yellow-500',
    textColor: 'text-yellow-900',
    borderColor: 'border-yellow-400',
    popular: true,
  },
];

export function QuickEntrySection() {
  return (
    <section className="py-16 md:py-24 bg-background">

      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight">
            GET ENTERED <span className="text-primary">FAST!</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Skip the shopping and go straight to entries with our Quick Entry packages
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {entryPackages.map((pkg) => (
            <div 
              key={pkg.tier}
              className={`relative group ${pkg.popular ? 'sm:-mt-4 sm:mb-4' : ''}`}
            >
              
              <div className={`relative bg-card/10 backdrop-blur-sm border-2 ${pkg.borderColor} rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {/* Entry badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-heading font-bold text-lg px-4 py-1">
                    {pkg.entries.toLocaleString()}
                    <span className="text-xs uppercase">Entries</span>
                  </span>
                </div>

                {/* Ticket visual */}
                <div className={`${pkg.color} ${pkg.textColor} rounded-lg p-6 mt-4 mb-6`}>
                  <p className="font-heading text-xs uppercase tracking-wider opacity-80">Yankum Ropes</p>
                  <p className="font-heading text-lg font-bold uppercase tracking-wider mt-2">{pkg.tier}</p>
                  <div className="border-t border-current/20 my-3" />
                  <p className="font-heading text-sm uppercase tracking-wider">Quick Entry</p>
                  <p className="font-heading text-4xl font-bold mt-2">${pkg.price}</p>
                </div>

                <Button 
                  asChild
                  size="lg"
                  variant={pkg.popular ? 'default' : 'outline'}
                  className="w-full font-heading font-bold uppercase tracking-wider"
                >
                  <Link to="/products">
                    Add to Cart
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
