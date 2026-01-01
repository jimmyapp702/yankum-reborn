import { Check } from 'lucide-react';

const buildHighlights = [
  'Custom lift kit & suspension',
  '35" all-terrain tires',
  'Front & rear bumpers with winch',
  'LED light bar & rock lights',
  'Roof rack & cargo system',
  'Premium recovery gear included',
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
            <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground px-6 py-4">
              <p className="text-sm font-heading uppercase tracking-wider opacity-80">Total Value</p>
              <p className="text-3xl font-heading font-bold">$75,000+</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <p className="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-3">
              The Grand Prize
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
              FULLY-BUILT OFF-ROAD RIG
            </h2>
            <p className="text-muted-foreground mb-8">
              A complete, trail-ready vehicle delivered to your door. Turn-key and ready to conquer any terrain.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {buildHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
