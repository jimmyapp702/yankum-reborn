const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: '100 free entries instantly'
  },
  {
    number: '02',
    title: 'Shop',
    description: '$1 spent = 1 entry'
  },
  {
    number: '03',
    title: 'Refer',
    description: '50 entries per friend'
  }
];

export function HowToEnter() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-wide">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">
          Steps To Win
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2 text-secondary-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}