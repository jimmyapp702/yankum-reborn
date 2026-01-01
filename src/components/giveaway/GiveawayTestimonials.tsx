const testimonials = [
  {
    quote: "Never win anything. But here I am with a fully-built rig in my driveway.",
    author: "Jake M.",
    location: "Colorado",
  },
  {
    quote: "Entered on a whim. Two months later I got the call.",
    author: "Sarah T.",
    location: "Texas",
  },
  {
    quote: "Completely legit. They handled everything.",
    author: "Marcus R.",
    location: "Arizona",
  },
];

export function GiveawayTestimonials() {
  return (
    <section className="py-16 bg-secondary border-y border-secondary-foreground/10">
      <div className="container-wide">
        <p className="text-center text-xs font-heading uppercase tracking-widest text-secondary-foreground/50 mb-8">
          Past Winners
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <p className="text-secondary-foreground text-lg mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-heading font-bold text-secondary-foreground text-sm">
                {testimonial.author}
              </p>
              <p className="text-secondary-foreground/50 text-xs">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
