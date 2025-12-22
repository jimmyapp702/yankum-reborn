import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Shield, Award } from 'lucide-react';

export function USAManufacturingSection() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 text-sm font-heading uppercase tracking-wider rounded-sm">
              <span className="text-lg">🇺🇸</span>
              <span>Made in America</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95]">
              AMERICAN <span className="text-primary">CRAFTSMANSHIP</span>
              <br />
              FROM START TO FINISH
            </h2>

            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Every Yankum rope is manufactured in the USA using American-made raw materials. 
              We control quality from fiber to finished product because your safety depends on it.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">USA Materials</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    American-sourced nylon and materials for consistent quality
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">American Workers</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    Supporting American jobs and manufacturing expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Quality Control</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    Every batch tested to ensure it exceeds rated specifications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">Lifetime Warranty</h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    We stand behind our products with a lifetime warranty
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/our-story"
              className="btn-primary inline-flex mt-4"
            >
              Our Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80"
                  alt="American manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background text-foreground p-6 rounded-sm shadow-xl max-w-[200px]">
                <div className="text-4xl mb-2">🇺🇸</div>
                <p className="font-heading font-bold text-lg">Proudly Made in the USA</p>
                <p className="text-muted-foreground text-sm mt-1">Since Day One</p>
              </div>

              {/* Stats Overlay */}
              <div className="absolute top-6 left-6 bg-secondary/95 backdrop-blur-sm text-secondary-foreground p-4 rounded-sm">
                <div className="text-3xl font-heading font-bold text-primary">100%</div>
                <p className="text-sm text-secondary-foreground/70">USA Manufactured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
