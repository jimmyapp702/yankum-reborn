import { Zap, Shield, AlertTriangle } from 'lucide-react';

export function EducationSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-heading text-sm uppercase tracking-wider">
                Education
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
                THE SCIENCE OF <span className="text-primary">KINETIC RECOVERY</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike static tow straps that can snap under load and become projectiles, 
                kinetic recovery ropes are designed to stretch and store energy — 
                creating a smooth, controlled pull that's safer and more effective.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Kinetic Energy Storage</h3>
                  <p className="text-muted-foreground">
                    Our ropes stretch up to 30% under load, storing energy that releases smoothly 
                    to pull stuck vehicles free without jarring shock loads.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Safety First Design</h3>
                  <p className="text-muted-foreground">
                    Double-braided nylon construction with reinforced eye loops. 
                    Every rope is tested to ensure it exceeds its rated breaking strength.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Why This Matters</h3>
                  <p className="text-muted-foreground">
                    When recovery goes wrong, people get hurt. Cheap straps and undersized 
                    equipment fail catastrophically. We build gear you can trust with your life.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/learn"
              className="btn-outline inline-flex mt-4"
            >
              Learn More About Recovery
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80"
                alt="Kinetic rope in action during vehicle recovery"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-secondary text-secondary-foreground p-6 rounded-sm shadow-xl max-w-xs">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="font-heading text-3xl font-bold text-primary">30%</span>
                  <p className="text-sm text-secondary-foreground/70 mt-1">Stretch Capacity</p>
                </div>
                <div>
                  <span className="font-heading text-3xl font-bold text-primary">52K+</span>
                  <p className="text-sm text-secondary-foreground/70 mt-1">LBS Breaking Strength</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
