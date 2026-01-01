import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

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
    <section className="relative py-28 md:py-36 bg-secondary overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-wide relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Prize value badge */}
          <div className="inline-block mb-8">
            <span className="text-primary font-heading text-sm font-bold tracking-[0.2em] uppercase">
              $75,000+ Grand Prize
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-secondary-foreground leading-[0.95] mb-6">
            Win a Fully-Built
            <span className="block text-primary">Off-Road Rig</span>
          </h1>
          
          <p className="text-secondary-foreground/60 text-lg max-w-md mx-auto mb-12">
            Every $1 spent = 1 entry. Featured products earn 20X. 
            Sign up for 100 free entries.
          </p>
          
          {/* Entry form */}
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-12 px-6 shrink-0"
              >
                {isLoading ? '...' : 'Enter Free'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-secondary-foreground/40 text-xs mt-4">
              No purchase necessary to enter or win.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
