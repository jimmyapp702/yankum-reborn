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
    <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <p className="text-primary font-heading text-sm font-bold tracking-[0.2em] uppercase mb-4">
              $75,000+ Grand Prize
            </p>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-foreground leading-[0.95] mb-6">
              Win a Fully-Built
              <span className="block text-primary">Off-Road Rig</span>
            </h1>
            
            <p className="text-secondary-foreground/60 text-lg max-w-md mb-8">
              Every $1 you spend = 1 entry. Featured products earn 20X entries. 
              Sign up now and get 100 free entries instantly.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-3xl font-heading font-bold text-primary">100</span>
                <p className="text-secondary-foreground/50">Free entries on signup</p>
              </div>
              <div>
                <span className="text-3xl font-heading font-bold text-primary">20X</span>
                <p className="text-secondary-foreground/50">On featured products</p>
              </div>
              <div>
                <span className="text-3xl font-heading font-bold text-primary">50</span>
                <p className="text-secondary-foreground/50">Per friend referred</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:pl-8">
            <div className="bg-background p-8 md:p-10 rounded-lg">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Enter to Win
              </h2>
              <p className="text-muted-foreground mb-6">
                Get 100 free entries when you sign up. No purchase necessary.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-muted border-0"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-12"
                >
                  {isLoading ? 'Entering...' : 'Get 100 Free Entries'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
              
              <p className="text-muted-foreground text-xs mt-4 text-center">
                By entering, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
