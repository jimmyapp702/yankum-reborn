const testimonials = [
  {
    quote: "I never win anything, but here I am with a fully-built rig in my driveway.",
    author: "Jake M.",
    location: "Colorado",
  },
  {
    quote: "Entered on a whim and two months later I got the call. Best decision ever.",
    author: "Sarah T.",
    location: "Texas",
  },
  {
    quote: "The whole process was legit. They handled taxes, shipping, everything.",
    author: "Marcus R.",
    location: "Arizona",
  },
];

export function GiveawayTestimonials() {
  return (
    <section className="py-20 bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-3">
            Past Winners
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            REAL WINNERS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8">
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
