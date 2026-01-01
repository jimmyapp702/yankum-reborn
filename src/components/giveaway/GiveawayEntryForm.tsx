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
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            DON'T MISS OUT
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Enter now for your chance to win. 100 free entries on signup.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-12 px-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold"
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
