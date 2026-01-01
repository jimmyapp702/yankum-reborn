import { useState } from 'react';
import { ArrowRight, Gift } from 'lucide-react';
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
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
            <Gift className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm uppercase tracking-wider">
              $75,000+ Grand Prize
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Win a Fully-Built
            <span className="text-primary block">Off-Road Rig</span>
          </h1>
          
          <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Every $1 you spend = 1 entry. Featured products earn 20X entries.
            Sign up now for 100 free entries.
          </p>
          
          {/* Entry form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-background text-foreground border-border"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                size="lg"
                className="h-14 px-8"
              >
                {isLoading ? 'Entering...' : 'Get 100 Free Entries'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-secondary-foreground/50 text-sm mt-4">
              No purchase necessary to enter.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
