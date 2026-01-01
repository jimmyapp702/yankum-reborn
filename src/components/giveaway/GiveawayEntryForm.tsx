import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, Target } from 'lucide-react';

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
    <section className="py-24 md:py-32 bg-yankum-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--yankum-steel)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--yankum-steel)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
          </div>

          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Don't Miss Out
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary-foreground tracking-tight mb-6">
            ENTER NOW
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          
          <p className="text-xl text-yankum-steel mb-12 max-w-lg mx-auto">
            Get 100 FREE entries instantly. Share with friends to maximize your chances.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col gap-4 mb-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-yankum-charcoal border-yankum-steel/30 text-primary-foreground h-16 text-lg rounded-none placeholder:text-yankum-steel focus:border-primary transition-colors text-center"
                required
              />
              
              <Input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-yankum-charcoal border-yankum-steel/30 text-primary-foreground h-16 text-lg rounded-none placeholder:text-yankum-steel focus:border-primary transition-colors text-center"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold uppercase tracking-[0.2em] text-lg h-16 rounded-none transition-all duration-300 hover:translate-y-[-2px]"
              >
                {isSubmitting ? 'Processing...' : 'Enter Giveaway'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-xs text-yankum-steel leading-relaxed">
              By entering, you agree to our Terms of Service and Privacy Policy. 
              We respect your privacy and will never spam you.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
