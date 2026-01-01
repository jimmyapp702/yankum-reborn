import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PreviousWinners() {
  return (
    <section className="relative py-16 md:py-24 bg-secondary overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2000&q=80"
          alt="Celebration"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2">
              Last Year's Giveaway
            </p>
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85]">
              WINNER
            </h2>
            <p className="text-white/80 text-lg md:text-xl mt-6 max-w-lg mx-auto lg:mx-0">
              Watch the incredible moment when our lucky winner received their brand new fully-built off-road rig!
            </p>
            <Button 
              size="lg" 
              className="mt-8 font-heading font-bold uppercase tracking-wider gap-3"
            >
              <Play className="h-5 w-5" />
              Watch The Reveal
            </Button>
          </div>

          {/* Video placeholder */}
          <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer bg-black/50">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
              alt="Previous winner celebration"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
