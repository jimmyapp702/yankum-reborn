import { Check, Truck } from 'lucide-react';

const highlights = [
  'Custom lift kit & suspension',
  '35" all-terrain tires',
  'Front & rear bumpers with winch',
  'LED light bar & rock lights',
  'Roof rack & cargo system',
  'Premium recovery gear included',
];

export function PrizeShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
              alt="Custom built off-road vehicle"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2 text-white">
                <Truck className="w-5 h-5" />
                <span className="font-heading font-semibold">Delivered to your door</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-3">
              The Grand Prize
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Fully-Built Off-Road Rig
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A complete, trail-ready vehicle worth over $75,000. Delivered to your door, ready to conquer any terrain.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
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
