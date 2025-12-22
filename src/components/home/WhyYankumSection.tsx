import { Shield, Factory, Award, Truck } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: 'Made in USA',
    description: 'Every product designed and manufactured in America with premium materials.',
  },
  {
    icon: Shield,
    title: 'Strength Tested',
    description: 'Rigorously tested to exceed stated breaking strengths for your safety.',
  },
  {
    icon: Award,
    title: 'Lifetime Warranty',
    description: 'We stand behind our gear. Period. Quality you can trust.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Free shipping on orders over $100. Most orders ship same day.',
  },
];

export function WhyYankumSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            WHY <span className="text-primary">YANKUM</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you're stuck in the mud, snow, or sand — you need gear that won't let you down. 
            We build recovery equipment for people who depend on their tools to work, every single time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Story Snippet */}
        <div className="mt-20 bg-secondary text-secondary-foreground rounded-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-primary font-heading text-sm uppercase tracking-wider mb-4">
                Our Mission
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Built for Those Who Get Out There
              </h3>
              <p className="text-secondary-foreground/80 leading-relaxed mb-6">
                We started Yankum because we were tired of recovery gear that couldn't handle real-world punishment. 
                Every rope, every strap, every shackle we make is designed by off-roaders, for off-roaders — 
                and manufactured right here in the USA with uncompromising quality standards.
              </p>
              <p className="text-secondary-foreground/80 leading-relaxed">
                When recovery goes wrong, people get hurt. That's why we test everything to its absolute limit, 
                so you never have to wonder if your gear will hold.
              </p>
            </div>
            <div className="relative min-h-[400px] lg:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1516563699916-fd7c9cfcb4bd?auto=format&fit=crop&w=1000&q=80"
                alt="Manufacturing facility"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
