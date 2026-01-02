import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mike R.',
    location: 'Colorado',
    rating: 5,
    text: "Pulled my buddy's Tacoma out of a snowbank with zero issues. The rope stretched perfectly and the recovery was smooth.",
    vehicle: '2021 Ford Bronco',
  },
  {
    id: 2,
    name: 'Sarah K.',
    location: 'Utah',
    rating: 5,
    text: "I've used cheap recovery straps before and had one snap on me. Never again. These Yankum ropes are the real deal.",
    vehicle: 'Jeep Wrangler JL',
  },
  {
    id: 3,
    name: 'James T.',
    location: 'Texas',
    rating: 5,
    text: "Ranch work means getting stuck is part of the job. These ropes have paid for themselves ten times over.",
    vehicle: 'Ram 2500',
  },
  {
    id: 4,
    name: 'Carlos M.',
    location: 'Arizona',
    rating: 5,
    text: "Professional recovery operator here. Yankum makes the best kinetic ropes on the market. Period.",
    vehicle: 'Recovery Professional',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            TRUSTED BY <span className="text-primary">THOUSANDS</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            Real reviews from customers who trust Yankum gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-5 md:p-8 rounded-sm shadow-sm"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-muted flex items-center justify-center font-heading font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-heading font-bold text-sm md:text-base">{testimonial.name}</span>
                    <span className="text-muted-foreground text-xs md:text-sm">• {testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground/30 flex-shrink-0" />
              </div>
              
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                "{testimonial.text}"
              </p>
              
              <span className="text-xs md:text-sm text-muted-foreground">
                {testimonial.vehicle}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div>
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">4.9</span>
            <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">Average Rating</p>
          </div>
          <div>
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">10K+</span>
            <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">Happy Customers</p>
          </div>
          <div>
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">50K+</span>
            <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">Successful Recoveries</p>
          </div>
          <div>
            <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">0</span>
            <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">Safety Incidents</p>
          </div>
        </div>
      </div>
    </section>
  );
}
