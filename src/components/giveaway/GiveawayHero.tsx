import { useState } from 'react';
import { ArrowRight, Gift, Zap } from 'lucide-react';
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-secondary">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Diagonal accent */}
      <div className="absolute -right-32 top-0 w-96 h-full bg-primary/20 transform skew-x-12" />
      
      <div className="relative container-wide py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-heading font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Limited Time Giveaway</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[0.95] tracking-tight">
                WIN THE
                <br />
                <span className="text-primary">ULTIMATE</span>
                <br />
                RECOVERY KIT
              </h1>
              <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-md leading-relaxed">
                Over $2,500 in premium Yankum Ropes gear. Enter now for your chance to win.
              </p>
            </div>
            
            {/* Entry form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 text-base"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold uppercase tracking-wider whitespace-nowrap"
                >
                  {isLoading ? 'Entering...' : 'Enter Now'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-secondary-foreground/50 text-sm">
                Get 100 free entries instantly. No purchase necessary.
              </p>
            </form>
            
            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">$2,500+</p>
                <p className="text-secondary-foreground/60 text-sm uppercase tracking-wider">Prize Value</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">100</p>
                <p className="text-secondary-foreground/60 text-sm uppercase tracking-wider">Free Entries</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">1</p>
                <p className="text-secondary-foreground/60 text-sm uppercase tracking-wider">Grand Prize</p>
              </div>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Background circle */}
              <div className="absolute inset-8 bg-primary/10 rounded-full" />
              
              {/* Gift box visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary/80 rounded-sm transform rotate-12 shadow-2xl flex items-center justify-center">
                    <Gift className="w-32 h-32 text-primary-foreground" />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary-foreground rounded-sm flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-2xl font-heading font-bold text-secondary">?</span>
                  </div>
                  <div className="absolute -bottom-4 -left-8 w-20 h-20 bg-primary/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
