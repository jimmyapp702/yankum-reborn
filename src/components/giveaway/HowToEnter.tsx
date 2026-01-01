import { Mail, Share2, ShoppingCart, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Mail,
    title: 'Enter Your Email',
    description: 'Sign up with your email address to get 100 FREE entries instantly.',
    entries: '100 Entries'
  },
  {
    number: '02',
    icon: Share2,
    title: 'Share With Friends',
    description: 'Share your unique referral link and earn 50 bonus entries for each friend who enters.',
    entries: '+50 Per Referral'
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'Shop & Earn More',
    description: 'Every $1 spent = 20 entries. Buy the gear you need and boost your chances to win!',
    entries: '20X Entries'
  },
  {
    number: '04',
    icon: Users,
    title: 'Follow Us',
    description: 'Follow us on social media for bonus entry opportunities and giveaway updates.',
    entries: '+25 Entries'
  }
];

export function HowToEnter() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-semibold uppercase tracking-wider">
            Simple Steps
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            HOW TO ENTER
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Multiple ways to enter means more chances to win. The more entries you have, 
            the better your odds!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Step number background */}
              <div className="absolute -top-4 -left-4 text-8xl font-heading font-bold text-primary/10 select-none">
                {step.number}
              </div>
              
              <div className="relative bg-secondary-foreground/5 rounded-lg p-6 border border-secondary-foreground/10 hover:border-primary/50 transition-colors h-full">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-secondary-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-secondary-foreground/70 text-sm mb-4">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-heading font-bold">
                  {step.entries}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}