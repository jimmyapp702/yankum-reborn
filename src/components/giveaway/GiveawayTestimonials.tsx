import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Yankum ropes have saved me countless times on the trail. The quality is unmatched.",
    author: "Mike R.",
    location: "Colorado",
    vehicle: "2021 Ford Bronco",
    rating: 5,
  },
  {
    quote: "Best investment I've made for off-roading. These ropes are built to last.",
    author: "Sarah T.",
    location: "Utah",
    vehicle: "2020 Jeep Wrangler",
    rating: 5,
  },
  {
    quote: "The kinetic energy recovery is incredible. Pulled my buddy's stuck truck out with ease.",
    author: "James K.",
    location: "Arizona",
    vehicle: "2019 Toyota 4Runner",
    rating: 5,
  },
];

const stats = [
  { value: '50K+', label: 'Total Entries' },
  { value: '127', label: 'Winners' },
  { value: '$75K+', label: 'Prizes Given' },
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
            Real Customers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            WHY THEY TRUST YANKUM
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
                  {testimonial.location} • {testimonial.vehicle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
