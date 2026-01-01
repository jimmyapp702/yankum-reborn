import { useState } from 'react';
import { ArrowRight, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function GiveawayEntryForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Entry confirmed! Check your email.');
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            READY TO WIN?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Enter your email below to claim your 100 free entries and get started.
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-base bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold uppercase tracking-wider whitespace-nowrap"
              >
                {isLoading ? 'Submitting...' : 'Enter Now'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Secure Entry</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>No Spam, Ever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
