import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Shield, Award, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 text-sm font-heading uppercase tracking-wider rounded-sm mb-6">
              <span className="text-lg">🇺🇸</span>
              <span>Made in America</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              OUR <span className="text-primary">STORY</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Yankum was founded on a simple belief: when you're stuck in the middle of nowhere, 
              you need gear you can trust with your life. We build that gear.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Built for People Who Depend on Their Gear
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We've seen too many recoveries go wrong because of cheap, undersized, or poorly-made equipment. 
                Tow straps that snap and become projectiles. Ropes rated for loads they can't handle. 
                Hardware that fails when you need it most.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                That's why we started Yankum. Every product we make is designed with one goal: 
                to get you and your vehicle home safely. We don't cut corners. We don't import cheap alternatives. 
                We manufacture everything in the USA using American materials and American workers.
              </p>
              <p className="text-foreground font-semibold">
                Because when recovery goes wrong, people get hurt. And we refuse to be responsible for that.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80"
                alt="American manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              These aren't just values on a wall. They're the principles that guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 rounded-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Safety First</h3>
              <p className="text-muted-foreground text-sm">
                Every product is designed, tested, and rated with safety as the top priority. 
                We don't sell anything we wouldn't use ourselves.
              </p>
            </div>

            <div className="bg-background p-8 rounded-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Made in USA</h3>
              <p className="text-muted-foreground text-sm">
                100% American manufacturing from raw materials to finished product. 
                We support American jobs and maintain complete quality control.
              </p>
            </div>

            <div className="bg-background p-8 rounded-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">No Compromises</h3>
              <p className="text-muted-foreground text-sm">
                We don't make "budget" versions with cheaper materials. 
                Every product meets our standards or it doesn't ship.
              </p>
            </div>

            <div className="bg-background p-8 rounded-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground text-sm">
                We're part of the off-road community, not just selling to it. 
                We listen, we learn, and we build what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80"
                alt="Quality testing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We don't just claim our ropes are strong — we test them. Every batch is tested 
                to ensure it exceeds the rated breaking strength. Not just the first batch. Every batch.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-semibold">Batch Testing</span>
                    <p className="text-muted-foreground text-sm">
                      Every production batch is tested to verify breaking strength
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-semibold">USA Materials</span>
                    <p className="text-muted-foreground text-sm">
                      American-sourced nylon for consistent quality and performance
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-semibold">Lifetime Warranty</span>
                    <p className="text-muted-foreground text-sm">
                      We stand behind every product we sell
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Trust Your Recovery to Yankum?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of off-roaders who trust Yankum when failure is not an option.
          </p>
          <Link to="/products" className="btn-primary inline-flex">
            Shop Recovery Gear
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
