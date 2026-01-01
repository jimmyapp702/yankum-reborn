import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Gift, Zap } from 'lucide-react';

export function GiveawayEntryForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast({
      title: "You're entered!",
      description: "Check your email for confirmation and your referral link!"
    });
    
    setEmail('');
    setPhone('');
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Gift className="w-10 h-10" />
            <Zap className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            DON'T MISS YOUR CHANCE
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8">
            Enter now and get 100 FREE entries. Share with friends to earn even more!
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground text-foreground border-0 h-14 text-lg"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold uppercase tracking-wider h-14 px-8"
              >
                {isSubmitting ? 'Entering...' : 'Enter Now'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <Input
              type="tel"
              placeholder="Phone Number (Optional - for SMS updates)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-primary-foreground text-foreground border-0 h-14 text-lg mb-4"
            />

            <p className="text-xs text-primary-foreground/60">
              By entering, you agree to our Terms of Service and Privacy Policy. 
              We'll never spam you or share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}