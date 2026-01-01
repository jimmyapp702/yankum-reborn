const steps = [
  {
    number: '01',
    title: 'Sign Up Free',
    description: 'Get 100 entries just for entering your email.',
  },
  {
    number: '02',
    title: 'Shop & Earn',
    description: 'Every $1 spent = 1 entry. Featured items = 20X.',
  },
  {
    number: '03',
    title: 'Refer Friends',
    description: 'Earn 50 bonus entries per referral signup.',
  },
];

export function HowToEnter() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            HOW TO ENTER
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-5xl font-heading font-bold text-primary mb-4">
                {step.number}
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-secondary-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
