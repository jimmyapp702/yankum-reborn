import { UserPlus, ShoppingCart, Users } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Sign Up Free',
    description: 'Get 100 entries instantly just for entering your email.',
  },
  {
    icon: ShoppingCart,
    number: '02',
    title: 'Shop & Earn',
    description: 'Every $1 spent = 1 entry. Featured products = 20X entries.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Refer Friends',
    description: 'Earn 50 bonus entries for every friend who signs up.',
  },
];

export function HowToEnter() {
  return (
    <section className="py-20 bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Three simple ways to earn entries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center bg-background rounded-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-heading font-bold text-primary mb-2">
                Step {step.number}
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
