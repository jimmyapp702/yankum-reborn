import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    toast({
      title: 'Welcome to the crew!',
      description: 'Check your email for exclusive deals and recovery tips.',
    });
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=2000&q=80"
          alt="Off-road adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container-wide">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            JOIN THE <span className="text-primary">CREW</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get exclusive deals, recovery tips, and first access to new gear. 
            Plus, enter our monthly giveaway for a chance to win premium recovery equipment.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span>You're in! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary h-14 px-8"
              >
                {isSubmitting ? 'Joining...' : 'Join Now'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          )}

          <p className="text-sm text-white/50 mt-6">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}
