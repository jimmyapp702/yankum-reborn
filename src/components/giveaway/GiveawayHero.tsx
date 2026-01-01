import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

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
    <section className="relative min-h-[90vh] bg-secondary overflow-hidden">
      <div className="grid lg:grid-cols-5 min-h-[90vh]">
        {/* Left - Image & Copy */}
        <div className="lg:col-span-3 relative flex flex-col justify-end p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-full">
          {/* Background image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2000&q=80"
              alt="Off-road vehicle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85] mb-4">
              WIN
              <br />
              THIS
            </h1>
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
              FULLY-BUILT OFF-ROAD RIG
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="#prize"
                className="inline-flex items-center px-6 py-3 text-primary font-heading font-bold text-sm uppercase tracking-wider hover:text-primary/80 transition-colors"
              >
                See The Prize
              </Link>
              <Button asChild size="lg" className="font-heading font-bold uppercase tracking-wider">
                <Link to="/products">
                  Shop Products
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:col-span-2 flex items-center justify-center p-8 md:p-12 bg-background">
          <div className="w-full max-w-md">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide mb-8 text-center">
              Enter Now and Get 100 Entries!
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-background border-border text-foreground text-lg"
              />
              
              <p className="text-muted-foreground text-xs leading-relaxed">
                By submitting this form, you consent to receive marketing messages from Yankum Ropes LLC. 
                Consent is not a condition of purchase. Msg & data rates may apply.{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a> & {' '}
                <a href="#" className="text-primary hover:underline">Terms</a>.
              </p>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                size="lg"
                className="w-full h-14 text-lg font-heading font-bold uppercase tracking-wider"
              >
                {isLoading ? 'Entering...' : 'Get Entered'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
