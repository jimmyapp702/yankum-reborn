import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
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
    <section className="relative min-h-screen bg-foreground overflow-hidden">
      {/* Scrolling Marquee */}
      <div className="absolute top-0 left-0 right-0 bg-primary py-2 z-20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider">
              20X ENTRIES SITE WIDE! • WIN BIG WITH YANKUM ROPES •
            </span>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1533591917954-27ebe5af4679?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">
          {/* Left side - Main content */}
          <div className="text-primary-foreground">
            <img src={yankumLogo} alt="Yankum Ropes" className="h-12 mb-8 invert" />
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-none mb-6 animate-fade-in">
              WIN<br />
              <span className="text-primary">THIS</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground/90 mb-8">
              ULTIMATE RECOVERY KIT GIVEAWAY
            </h2>
            
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
              Enter now for your chance to win our complete premium recovery bundle 
              worth over $2,500 in gear!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold uppercase tracking-wider text-lg px-8 py-6"
                onClick={() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enter Giveaway
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold uppercase tracking-wider"
              >
                See Prizes
              </Button>
            </div>
          </div>

          {/* Right side - Entry Form */}
          <div id="entry-form" className="bg-foreground/80 backdrop-blur-sm p-8 rounded-lg border border-primary-foreground/10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-6">
              ENTER NOW AND GET 100 ENTRIES!
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground text-foreground border-0 h-12 text-lg"
                required
              />
              
              <Input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-primary-foreground text-foreground border-0 h-12 text-lg"
              />

              <p className="text-xs text-primary-foreground/50 leading-relaxed">
                By submitting this form, you consent to receive marketing messages from Yankum Ropes LLC. 
                Msg & data rates may apply. Unsubscribe anytime by replying STOP. 
                <a href="/privacy" className="underline ml-1">Privacy Policy</a> & 
                <a href="/terms" className="underline ml-1">Terms</a>.
              </p>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold uppercase tracking-wider text-lg h-14"
              >
                {isSubmitting ? 'Entering...' : 'GET ENTERED'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}