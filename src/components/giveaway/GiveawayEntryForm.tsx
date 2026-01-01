import { useState } from 'react';
import { ArrowRight, Gift } from 'lucide-react';
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
    <section className="py-20 bg-primary">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Win?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Enter now for your chance to win. Get 100 free entries instantly.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-primary-foreground text-foreground border-0"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                variant="secondary"
                size="lg"
                className="h-14 px-8"
              >
                {isLoading ? 'Entering...' : 'Enter Now'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
          
          <p className="text-primary-foreground/50 text-sm mt-6">
            No purchase necessary. Must be 18+ to enter.
          </p>
        </div>
      </div>
    </section>
  );
}
