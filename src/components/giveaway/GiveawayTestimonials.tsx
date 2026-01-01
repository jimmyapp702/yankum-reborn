import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I never win anything, but here I am with a fully-built rig in my driveway. Still can't believe it's real.",
    author: "Jake M.",
    location: "Colorado",
    winner: "2024 Jeep Wrangler",
    rating: 5,
  },
  {
    quote: "Entered on a whim and two months later I got the call. Best decision I ever made was hitting that submit button.",
    author: "Sarah T.",
    location: "Texas",
    winner: "2023 Ford Bronco",
    rating: 5,
  },
  {
    quote: "The whole process was legit. They handled everything — taxes, shipping, registration help. Top notch.",
    author: "Marcus R.",
    location: "Arizona",
    winner: "2024 Toyota 4Runner",
    rating: 5,
  },
];

const stats = [
  { value: '150K+', label: 'Entries' },
  { value: '23', label: 'Vehicles Given' },
  { value: '$1.2M+', label: 'In Prizes' },
];

export function GiveawayTestimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 md:p-6 bg-muted">
              <p className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-heading font-semibold uppercase tracking-widest text-primary mb-4">
            Past Winners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            REAL WINNERS. REAL RIGS.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-muted p-8 border-l-4 border-primary"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote text */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author info */}
              <div>
                <p className="font-heading font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
                <p className="text-sm text-primary font-semibold mt-1">
                  Won: {testimonial.winner}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
