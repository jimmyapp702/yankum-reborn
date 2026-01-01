import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jake M.',
    location: 'Colorado',
    text: "I've entered every Yankum giveaway and finally won last month! The quality of their gear is unmatched. Already planning my next off-road trip.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    rating: 5
  },
  {
    name: 'Sarah T.',
    location: 'Texas',
    text: "Even before winning, I was a customer. Their kinetic ropes have saved me twice on the trails. The giveaway is just a bonus!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    rating: 5
  },
  {
    name: 'Mike R.',
    location: 'Arizona',
    text: "Entered for the first time last month and won a soft shackle set! Can't believe how easy it was. Already shared with all my wheeling buddies.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    rating: 5
  }
];

const stats = [
  { value: '50,000+', label: 'Total Entries' },
  { value: '127', label: 'Winners So Far' },
  { value: '$75K+', label: 'In Prizes Given' },
  { value: '4.9', label: 'Average Rating' }
];

export function GiveawayTestimonials() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold uppercase tracking-wider text-sm">
            Real Winners, Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2">
            WHAT WINNERS SAY
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-background rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
