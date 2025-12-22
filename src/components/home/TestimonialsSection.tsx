import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mike R.',
    location: 'Colorado',
    rating: 5,
    text: "Pulled my buddy's Tacoma out of a snowbank with zero issues. The rope stretched perfectly and the recovery was smooth as butter. This is what quality gear should feel like.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    vehicle: '2021 Ford Bronco',
  },
  {
    id: 2,
    name: 'Sarah K.',
    location: 'Utah',
    rating: 5,
    text: "I've used cheap recovery straps before and had one snap on me. Never again. These Yankum ropes are the real deal — I trust them with my rig and my safety.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    vehicle: 'Jeep Wrangler JL',
  },
  {
    id: 3,
    name: 'James T.',
    location: 'Texas',
    rating: 5,
    text: "Ranch work means getting stuck is part of the job. These ropes have paid for themselves ten times over. Made in America and built to last — exactly what I was looking for.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    vehicle: 'Ram 2500',
  },
  {
    id: 4,
    name: 'Carlos M.',
    location: 'Arizona',
    rating: 5,
    text: "Professional recovery operator here. I've tested a lot of gear, and Yankum makes the best kinetic ropes on the market. Period. The quality control is impeccable.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    vehicle: 'Recovery Professional',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            TRUSTED BY <span className="text-primary">THOUSANDS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real reviews from real customers who trust Yankum gear when it matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-sm shadow-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-heading font-bold">{testimonial.name}</span>
                    <span className="text-muted-foreground text-sm">• {testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-muted-foreground/30" />
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              <span className="text-sm text-muted-foreground">
                {testimonial.vehicle}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-heading text-4xl md:text-5xl font-bold text-primary">4.9</span>
            <p className="text-muted-foreground mt-2">Average Rating</p>
          </div>
          <div>
            <span className="font-heading text-4xl md:text-5xl font-bold text-primary">10K+</span>
            <p className="text-muted-foreground mt-2">Happy Customers</p>
          </div>
          <div>
            <span className="font-heading text-4xl md:text-5xl font-bold text-primary">50K+</span>
            <p className="text-muted-foreground mt-2">Successful Recoveries</p>
          </div>
          <div>
            <span className="font-heading text-4xl md:text-5xl font-bold text-primary">0</span>
            <p className="text-muted-foreground mt-2">Safety Incidents</p>
          </div>
        </div>
      </div>
    </section>
  );
}
