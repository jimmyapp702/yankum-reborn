import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1533591917954-27ebe5af4679?auto=format&fit=crop&w=2000&q=80"
          alt="Off-road vehicle in rugged terrain"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-wide py-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-sm text-sm font-medium">
            <span className="text-lg">🇺🇸</span>
            <span>Proudly Made in the USA</span>
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight text-shadow">
            AMERICAN-MADE
            <br />
            <span className="text-primary">RECOVERY GEAR</span>
            <br />
            BUILT TO PULL
            <br />
            YOU THROUGH
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
            When failure is not an option, trust the gear that's been tested to the extreme. 
            Engineered for safety. Built for strength.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
              <Link to="/collections/kinetic-ropes">
                Shop Ropes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
              <Link to="/collections/recovery-kits">
                Shop Recovery Kits
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <span className="text-sm font-medium">Tested & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg">🛡️</span>
              </div>
              <span className="text-sm font-medium">Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg">🚚</span>
              </div>
              <span className="text-sm font-medium">Free Shipping $100+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
