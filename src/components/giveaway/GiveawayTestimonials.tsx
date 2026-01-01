import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jake M.',
    location: 'Colorado',
    text: "I've entered every Yankum giveaway and finally won last month! The quality of their gear is unmatched. Already planning my next off-road trip.",
    rating: 5
  },
  {
    name: 'Sarah T.',
    location: 'Texas',
    text: "Even before winning, I was a customer. Their kinetic ropes have saved me twice on the trails. The giveaway is just a bonus!",
    rating: 5
  },
  {
    name: 'Mike R.',
    location: 'Arizona',
    text: "Entered for the first time last month and won a soft shackle set! Can't believe how easy it was. Already shared with all my wheeling buddies.",
    rating: 5
  }
];

const stats = [
  { value: '50K+', label: 'Total Entries' },
  { value: '127', label: 'Winners' },
  { value: '$75K+', label: 'Prizes Given' },
  { value: '4.9', label: 'Avg Rating' }
];

export function GiveawayTestimonials() {
  return (
    <section className="py-24 md:py-32 bg-yankum-charcoal relative overflow-hidden">
      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yankum-steel/30 to-transparent" />
      
      <div className="container-wide relative z-10">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center relative">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-yankum-steel/30" />
              )}
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-yankum-steel uppercase tracking-[0.2em] font-heading">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Real Winners
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground tracking-tight">
            WHAT THEY SAY
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-yankum-black border border-yankum-steel/20 p-8 relative group hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-yankum-steel/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-yankum-steel/20">
                <h4 className="font-heading font-bold text-primary-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-yankum-steel">
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
