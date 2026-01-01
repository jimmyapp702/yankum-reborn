import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Shield, Lock, ChevronRight } from 'lucide-react';
import yankumLogo from '@/assets/yankum-logo.png';

export function GiveawayHero() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast({
      title: "You're entered!",
      description: "Check your email for confirmation. Good luck!"
    });
    
    setEmail('');
    setPhone('');
  };

  return (
    <section className="relative min-h-screen bg-yankum-black overflow-hidden">
      {/* Scrolling Marquee */}
      <div className="absolute top-0 left-0 right-0 bg-primary py-3 z-20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-primary-foreground font-heading font-bold text-sm uppercase tracking-[0.2em]">
              20X ENTRIES SITE WIDE • WIN BIG WITH YANKUM ROPES • LIMITED TIME •
            </span>
          ))}
        </div>
      </div>

      {/* Industrial texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-[60%] bg-gradient-to-t from-primary/30 to-transparent ml-[10%]" />
        <div className="absolute bottom-0 left-0 w-px h-[40%] bg-gradient-to-t from-yankum-steel/30 to-transparent ml-[15%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide min-h-screen flex items-center pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left side - Main content */}
          <div className="text-primary-foreground">
            <img src={yankumLogo} alt="Yankum Ropes" className="h-10 mb-10 brightness-0 invert opacity-80" />
            
            <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Ultimate Recovery Kit
            </p>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-6 tracking-tight">
              WIN<br />
              <span className="text-primary">THIS</span>
            </h1>
            
            <div className="w-20 h-1 bg-primary mb-8" />
            
            <p className="text-lg text-primary-foreground/60 mb-10 max-w-md leading-relaxed">
              Enter now for your chance to win our complete premium recovery bundle 
              worth over <span className="text-primary font-semibold">$2,500</span> in professional-grade gear.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold uppercase tracking-[0.15em] text-base px-10 py-7 rounded-none transition-all duration-300 hover:translate-x-1"
                onClick={() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enter Giveaway
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-yankum-steel text-primary-foreground bg-transparent hover:bg-yankum-steel/20 font-heading font-semibold uppercase tracking-[0.15em] rounded-none px-8 py-7"
                onClick={() => document.getElementById('prizes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Prizes
              </Button>
            </div>
          </div>

          {/* Right side - Entry Form */}
          <div id="entry-form" className="bg-yankum-charcoal/80 backdrop-blur-sm p-10 border border-yankum-steel/20 relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

            <div className="text-center mb-8">
              <p className="text-primary font-heading font-semibold uppercase tracking-[0.2em] text-sm mb-3">
                Get Started
              </p>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground tracking-tight">
                100 FREE ENTRIES
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-yankum-black border-yankum-steel/30 text-primary-foreground h-14 text-base rounded-none placeholder:text-yankum-steel focus:border-primary transition-colors"
                required
              />
              
              <Input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-yankum-black border-yankum-steel/30 text-primary-foreground h-14 text-base rounded-none placeholder:text-yankum-steel focus:border-primary transition-colors"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold uppercase tracking-[0.2em] text-base h-16 rounded-none transition-all duration-300"
              >
                {isSubmitting ? 'Processing...' : 'Get Entered'}
              </Button>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-yankum-steel text-xs uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure Entry</span>
                </div>
                <div className="flex items-center gap-2 text-yankum-steel text-xs uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              <p className="text-xs text-yankum-steel leading-relaxed text-center pt-2">
                By submitting, you consent to receive marketing from Yankum Ropes LLC. 
                Msg & data rates may apply. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
