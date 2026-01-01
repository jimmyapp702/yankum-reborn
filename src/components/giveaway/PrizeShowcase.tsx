import { Gift, Truck, Shield, Wrench } from 'lucide-react';
import heroRope from '@/assets/hero-kinetic-rope.png';

const prizes = [
  {
    name: 'Premium Kinetic Recovery Rope',
    description: '1" x 30\' with 52,300 lbs breaking strength',
    value: '$299',
    image: heroRope,
  },
  {
    name: 'Soft Shackle Set (4-Pack)',
    description: 'UHMWPE construction, lightweight & safe',
    value: '$149',
    image: 'https://images.unsplash.com/photo-1609668528780-e364738d8c4b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Tree Saver Strap',
    description: '3" x 8\' heavy-duty tree protector',
    value: '$89',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Recovery Damper',
    description: 'Weighted line dampener for safety',
    value: '$49',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=400&q=80',
  },
];

const features = [
  { icon: Gift, text: 'Total Value Over $2,500' },
  { icon: Truck, text: 'Free Shipping Included' },
  { icon: Shield, text: 'Lifetime Warranty' },
  { icon: Wrench, text: 'Complete Kit Ready' },
];

export function PrizeShowcase() {
  return (
    <section id="prizes" className="py-24 md:py-32 bg-yankum-charcoal relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yankum-steel/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yankum-steel/30 to-transparent" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            What You Could Win
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary-foreground tracking-tight mb-6">
            THE ULTIMATE<br />RECOVERY BUNDLE
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-yankum-steel text-lg max-w-2xl mx-auto">
            Professional-grade recovery gear trusted by off-road enthusiasts worldwide.
          </p>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.text} 
              className="flex items-center gap-3 bg-yankum-black/50 border border-yankum-steel/20 px-4 py-4"
            >
              <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Prize grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <div 
              key={prize.name}
              className="group bg-yankum-black border border-yankum-steel/20 overflow-hidden hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative overflow-hidden bg-yankum-charcoal">
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yankum-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 font-heading font-bold text-sm tracking-wider">
                  {prize.value}
                </div>
              </div>
              <div className="p-5 border-t border-yankum-steel/20">
                <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2 tracking-tight">
                  {prize.name}
                </h3>
                <p className="text-sm text-yankum-steel">
                  {prize.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total value banner */}
        <div className="mt-16 bg-yankum-black border border-primary/30 p-10 md:p-12 text-center relative overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
          
          <p className="text-yankum-steel font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-3">
            Total Prize Value
          </p>
          <p className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-primary">
            $2,500<span className="text-3xl align-top">+</span>
          </p>
        </div>
      </div>
    </section>
  );
}
