import { Gift, Package, Shield, Wrench } from 'lucide-react';
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
  { icon: Package, text: 'Free Shipping Included' },
  { icon: Shield, text: 'Lifetime Warranty' },
  { icon: Wrench, text: 'Complete Kit Ready to Use' },
];

export function PrizeShowcase() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold uppercase tracking-wider">
            What You Could Win
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-4">
            THE ULTIMATE RECOVERY BUNDLE
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for safe, effective vehicle recovery — all in one incredible prize package.
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.text} className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Prize grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize) => (
            <div 
              key={prize.name}
              className="group bg-muted rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-background">
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded font-heading font-bold">
                  {prize.value}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-foreground mb-1">
                  {prize.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {prize.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total value banner */}
        <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <p className="text-lg font-semibold mb-2">TOTAL PRIZE VALUE</p>
          <p className="text-5xl md:text-6xl font-heading font-bold">$2,500+</p>
        </div>
      </div>
    </section>
  );
}