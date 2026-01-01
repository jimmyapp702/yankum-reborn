import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Shield, Award } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Made in USA',
    description: 'Every rope manufactured in our American facility'
  },
  {
    icon: Users,
    title: 'American Workers',
    description: 'Supporting local jobs and communities'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Rigorous testing on every product'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Setting the standard for recovery gear'
  }
];

export function USAManufacturingSection() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              PROUDLY MADE IN THE USA
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-lg">
              Every Yankum rope is manufactured right here in America. We're committed to quality craftsmanship, 
              supporting American workers, and delivering the best recovery gear on the market.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="p-2 bg-primary/20 rounded">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-secondary-foreground">{feature.title}</h3>
                    <p className="text-sm text-secondary-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="btn-primary"
            >
              Learn Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary-foreground/10">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                alt="American manufacturing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-heading font-bold text-secondary-foreground">
                  "Quality you can trust, made by people who care."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}