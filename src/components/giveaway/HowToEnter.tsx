import { Mail, Share2, ShoppingCart, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Mail,
    title: 'Enter Your Email',
    description: 'Sign up to get 100 FREE entries instantly.',
    entries: '100 Entries'
  },
  {
    number: '02',
    icon: Share2,
    title: 'Share With Friends',
    description: 'Earn 50 bonus entries for each referral.',
    entries: '+50 Per Referral'
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'Shop & Earn More',
    description: 'Every $1 spent = 20 entries toward the prize.',
    entries: '20X Entries'
  },
  {
    number: '04',
    icon: Users,
    title: 'Follow Us',
    description: 'Get bonus entries from social engagement.',
    entries: '+25 Entries'
  }
];

export function HowToEnter() {
  return (
    <section className="py-24 md:py-32 bg-yankum-black relative overflow-hidden">
      {/* Vertical accent lines */}
      <div className="absolute left-[20%] top-0 w-px h-full bg-gradient-to-b from-transparent via-yankum-steel/10 to-transparent" />
      <div className="absolute right-[20%] top-0 w-px h-full bg-gradient-to-b from-transparent via-yankum-steel/10 to-transparent" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Simple Steps
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary-foreground tracking-tight mb-6">
            HOW TO ENTER
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-yankum-steel text-lg max-w-xl mx-auto">
            Multiple ways to enter means more chances to win.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Large step number */}
              <div className="absolute -top-6 -left-2 text-[120px] font-heading font-bold text-yankum-charcoal/50 leading-none select-none z-0">
                {step.number}
              </div>
              
              <div className="relative z-10 bg-yankum-charcoal border border-yankum-steel/20 p-8 h-full hover:border-primary/40 transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-14 h-14 bg-yankum-black border border-yankum-steel/30 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-yankum-steel text-sm mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 text-sm font-heading font-bold uppercase tracking-wider">
                  {step.entries}
                </div>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-yankum-steel/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
