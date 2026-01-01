import { Check, Wrench, Shield, Truck, Gauge } from 'lucide-react';

const vehicleSpecs = [
  {
    icon: Wrench,
    title: 'Fully Built',
    description: 'Custom suspension, armor, and accessories installed',
  },
  {
    icon: Shield,
    title: 'Trail Ready',
    description: 'Built to conquer any terrain you throw at it',
  },
  {
    icon: Truck,
    title: 'Delivered Free',
    description: 'We cover shipping anywhere in the continental US',
  },
  {
    icon: Gauge,
    title: 'Turn-Key',
    description: 'Drive it off the trailer and hit the trails',
  },
];

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
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-heading font-semibold uppercase tracking-widest text-primary mb-4">
            The Grand Prize
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            FULLY-BUILT OFF-ROAD RIG
          </h2>
        </div>
        
        {/* Vehicle specs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {vehicleSpecs.map((spec, index) => (
            <div key={index} className="bg-background p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <spec.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{spec.title}</h3>
              <p className="text-sm text-muted-foreground">{spec.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Vehicle image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-background rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
                alt="Custom built off-road vehicle"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Value badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3">
              <p className="text-sm font-heading uppercase tracking-wider">Total Value</p>
              <p className="text-2xl font-heading font-bold">$75,000+</p>
            </div>
          </div>
          
          {/* Right: Build highlights */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              BUILD HIGHLIGHTS
            </h3>
            <div className="space-y-4">
              {buildHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background border border-border"
                >
                  <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-semibold text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
