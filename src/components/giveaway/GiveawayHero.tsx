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
    <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=80"
          alt="Off-road vehicle"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
      </div>
      
      <div className="relative container-wide py-20">
        <div className="max-w-2xl">
          {/* Prize value */}
          <p className="text-primary font-heading font-bold text-lg tracking-wider mb-4">
            $75,000+ VALUE
          </p>
          
          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-secondary-foreground leading-[0.9] mb-6">
            WIN A FULLY-BUILT
            <br />
            <span className="text-primary">OFF-ROAD RIG</span>
          </h1>
          
          <p className="text-secondary-foreground/70 text-xl max-w-lg mb-10">
            Enter for free. Shop to earn more entries. Every $1 = 1 entry.
          </p>
          
          {/* Entry form */}
          <form onSubmit={handleSubmit} className="max-w-md mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-secondary-foreground text-foreground border-0 placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold"
              >
                {isLoading ? '...' : 'Enter'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-secondary-foreground/50 text-sm mt-3">
              100 free entries on signup. No purchase necessary.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
