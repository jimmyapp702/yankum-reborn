import { useState } from 'react';
import { ArrowRight, Gift, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

export function GiveawayHero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("You're in! Check your email for confirmation.");
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2000&q=80"
          alt="Off-road vehicle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-primary font-heading font-bold text-sm uppercase tracking-wider">
                $75,000+ Value
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
              WIN THIS
              <span className="block text-primary">OFF-ROAD RIG</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg">
              Enter now for your chance to win a fully-built, trail-ready vehicle. Sign up and get 100 FREE entries instantly.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-3 text-white/70">
                <Gift className="h-5 w-5 text-primary" />
                <span className="text-sm">$1 Spent = 1 Entry</span>
              </div>
              <div className="w-px h-4 bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-3 text-white/70">
                <span className="text-sm">50 Entries Per Referral</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-heading font-bold uppercase tracking-wider">
                <a href="#prize" className="gap-2">
                  See The Prize
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-heading font-bold uppercase tracking-wider border-white text-white hover:bg-white hover:text-secondary"
              >
                <Link to="/products">
                  Shop Products
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="bg-card/10 backdrop-blur-sm border-2 border-primary/30 rounded-lg p-8 md:p-10">
            <div className="text-center mb-8">
              <span className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider px-4 py-2 mb-4">
                Free Entry
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2">
                Get 100 Entries
              </h2>
              <p className="text-white/70">
                Sign up now — no purchase necessary
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg focus:border-primary"
              />

              <Button 
                type="submit" 
                disabled={isLoading}
                size="lg"
                className="w-full h-14 text-lg font-heading font-bold uppercase tracking-wider"
              >
                {isLoading ? 'Entering...' : 'Get My Free Entries'}
              </Button>

              <p className="text-white/50 text-xs text-center leading-relaxed">
                By submitting, you agree to receive marketing messages.{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a> & {' '}
                <a href="#" className="text-primary hover:underline">Terms</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
