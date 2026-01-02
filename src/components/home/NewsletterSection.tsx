import { useState } from 'react';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    toast({
      title: 'Welcome to the crew!',
      description: 'Check your email for exclusive deals.'
    });
  };

  if (isSubscribed) {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <CheckCircle className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">
            YOU'RE IN!
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-lg">
            Check your inbox for a welcome email with exclusive offers.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center px-2">
          <Mail className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 opacity-80" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">
            JOIN THE YANKUM CREW
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-lg mb-6 md:mb-8">
            Get exclusive deals, recovery tips, and be first to know about new products.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground min-h-[48px] text-base"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold uppercase tracking-wider min-h-[48px] px-6"
            >
              {isSubmitting ? 'Joining...' : 'Join Now'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/60 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
