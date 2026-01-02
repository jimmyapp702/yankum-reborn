import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroRopeImage from '@/assets/hero-kinetic-rope.png';

export function KineticRopesHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Background gradient only */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/80" />

      <div className="container-wide relative py-10 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-heading uppercase tracking-wider">
              <Zap className="h-3 w-3 md:h-4 md:w-4" />
              <span>Kinetic Recovery Ropes</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              THE ROPE THAT
              <br />
              <span className="text-primary">STRETCHES</span>
              <br />
              SO YOU DON'T BREAK
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
              Unlike static tow straps that snap under load, our kinetic ropes stretch up to 30% — 
              storing energy and releasing it smoothly to pull you free.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-3 md:p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary block">30%</span>
                <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider">Stretch</span>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary block">52K+</span>
                <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider">LBS Strength</span>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary block">100%</span>
                <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider">USA Made</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Batch Tested</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image + CTA below */}
          <div className="space-y-5 md:space-y-6 order-1 lg:order-2">
            {/* Main Hero Image */}
            <div className="relative">
              <img 
                src={heroRopeImage} 
                alt="Yankum Kinetic Recovery Rope - 1 inch x 30 feet" 
                className="w-full h-auto max-w-md lg:max-w-lg mx-auto"
              />
            </div>

            {/* CTAs below image */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-heading text-base md:text-lg px-6 md:px-8 py-5 md:py-6 min-h-[52px]"
              >
                <Link to="/products">
                  Shop Kinetic Ropes
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-heading text-base md:text-lg px-6 md:px-8 py-5 md:py-6 min-h-[52px]"
              >
                <Link to="/learn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
