import { Mail, Share2, ShoppingCart, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Mail,
    title: 'Enter Your Email',
    description: 'Sign up to get 100 FREE entries instantly.',
    entries: '+100',
  },
  {
    number: '02',
    icon: Share2,
    title: 'Share With Friends',
    description: 'Earn 50 bonus entries for each referral.',
    entries: '+50',
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'Shop & Earn',
    description: 'Every $1 spent = 20 additional entries.',
    entries: '20x',
  },
  {
    number: '04',
    icon: Users,
    title: 'Follow Us',
    description: 'Get bonus entries from social engagement.',
    entries: '+25',
  },
];

export function HowToEnter() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-heading font-semibold uppercase tracking-widest text-primary mb-4">
            Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            HOW TO ENTER
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Multiple ways to enter means more chances to win the ultimate recovery kit.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border z-0" />
              )}
              
              <div className="relative bg-muted p-8 h-full transition-all duration-300 group-hover:bg-muted/80">
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-foreground text-background flex items-center justify-center font-heading font-bold text-sm">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Entry badge */}
                <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 text-sm font-heading font-bold">
                  {step.entries} <span className="text-xs font-normal opacity-80">entries</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
