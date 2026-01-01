import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Shield, Lock, ArrowRight } from 'lucide-react';
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Scrolling Marquee */}
      <div className="absolute top-0 left-0 right-0 bg-primary py-2.5 z-20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider">
              20X ENTRIES SITE WIDE • WIN BIG WITH YANKUM ROPES • LIMITED TIME •
            </span>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1533591917954-27ebe5af4679?auto=format&fit=crop&w=2000&q=80"
          alt="Off-road vehicle recovery"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-white px-4 py-2 rounded-sm text-sm font-medium mb-8">
              <span className="text-lg">🎁</span>
              <span>Ultimate Recovery Kit Giveaway</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] tracking-tight text-shadow mb-6">
              WIN<br />
              <span className="text-primary">THIS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-lg leading-relaxed mb-8">
              Enter now for your chance to win our complete premium recovery bundle 
              worth over <span className="text-primary font-semibold">$2,500</span> in gear!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6"
                onClick={() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enter Giveaway
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground"
                onClick={() => document.getElementById('prizes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Prizes
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Lock className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Secure Entry</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Verified Giveaway</span>
              </div>
            </div>
          </div>

          {/* Right side - Entry Form */}
          <div id="entry-form" className="bg-background/95 backdrop-blur-sm p-8 md:p-10 rounded-sm shadow-xl">
            <div className="text-center mb-8">
              <span className="text-primary font-heading font-semibold uppercase tracking-wider text-sm">
                Get Started
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
                100 FREE ENTRIES
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base"
                required
              />
              
              <Input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 text-base"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg h-14"
              >
                {isSubmitting ? 'Processing...' : 'Get Entered'}
              </Button>

              <p className="text-xs text-muted-foreground leading-relaxed text-center pt-2">
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
