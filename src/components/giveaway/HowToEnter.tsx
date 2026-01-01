const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: '100 free entries instantly',
  },
  {
    number: '02',
    title: 'Shop',
    description: '$1 spent = 1 entry',
  },
  {
    number: '03',
    title: 'Refer',
    description: '50 entries per friend',
  },
];

export function HowToEnter() {
  return (
    <section className="py-16 bg-muted border-b border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-1">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
