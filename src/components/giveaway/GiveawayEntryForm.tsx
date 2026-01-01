import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-3">
            Ready to Win?
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            100 free entries. No purchase necessary.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-primary-foreground text-foreground border-0"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                variant="secondary"
                className="h-12 px-6 shrink-0"
              >
                {isLoading ? '...' : 'Enter'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
