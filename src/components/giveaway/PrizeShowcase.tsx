import { Check } from 'lucide-react';

const highlights = [
  'Custom lift kit & suspension',
  '35" all-terrain tires',
  'Front & rear bumpers with winch',
  'LED light bar & rock lights',
  'Roof rack & cargo system',
  'Premium recovery gear',
];

export function PrizeShowcase() {
  return (
    <section className="py-20 bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
              alt="Custom built off-road vehicle"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-foreground text-background px-4 py-2">
              <p className="text-xs uppercase tracking-wider opacity-70">Total Value</p>
              <p className="text-xl font-heading font-bold">$75,000+</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <p className="text-primary font-heading font-bold text-xs uppercase tracking-widest mb-3">
              Grand Prize
            </p>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Fully-Built Off-Road Rig
            </h2>
            <p className="text-muted-foreground mb-8">
              A complete, trail-ready vehicle delivered to your door. Turn-key and ready to conquer any terrain.
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
