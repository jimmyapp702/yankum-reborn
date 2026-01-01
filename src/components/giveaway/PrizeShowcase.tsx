import { Check, Star } from 'lucide-react';
import heroRopeImage from '@/assets/hero-kinetic-rope.png';

const prizes = [
  {
    name: '1" Kinetic Recovery Rope',
    value: '$329',
    specs: '30ft length, 33,500 lb MBS',
    featured: true,
  },
  {
    name: 'Soft Shackle Set',
    value: '$189',
    specs: 'Pair of 7/16" synthetic shackles',
    featured: false,
  },
  {
    name: 'Recovery Damper Bag',
    value: '$79',
    specs: 'Weighted line damper for safety',
    featured: false,
  },
  {
    name: 'Premium Gear Bag',
    value: '$149',
    specs: 'Heavy-duty storage solution',
    featured: false,
  },
  {
    name: 'D-Ring Shackles',
    value: '$89',
    specs: 'Pair of 3/4" steel shackles',
    featured: false,
  },
  {
    name: 'Recovery Gloves',
    value: '$49',
    specs: 'Heavy-duty leather work gloves',
    featured: false,
  },
];

export function PrizeShowcase() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-heading font-semibold uppercase tracking-widest text-primary mb-4">
            What You Could Win
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            THE PRIZE PACKAGE
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Featured image */}
          <div className="relative">
            <div className="aspect-square bg-background rounded-sm p-8 flex items-center justify-center">
              <img 
                src={heroRopeImage}
                alt="Yankum Kinetic Recovery Rope"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Value badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3">
              <p className="text-sm font-heading uppercase tracking-wider">Total Value</p>
              <p className="text-2xl font-heading font-bold">$2,500+</p>
            </div>
          </div>
          
          {/* Right: Prize list */}
          <div className="space-y-4">
            {prizes.map((prize, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-5 bg-background border transition-all duration-200 hover:border-primary/50 ${
                  prize.featured ? 'border-primary' : 'border-border'
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                  prize.featured ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
                }`}>
                  {prize.featured ? (
                    <Star className="w-5 h-5" />
                  ) : (
                    <Check className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-foreground">
                    {prize.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{prize.specs}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-heading font-bold text-lg text-primary">{prize.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
