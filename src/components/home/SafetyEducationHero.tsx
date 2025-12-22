import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SafetyEducationHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-wide relative py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 text-sm font-heading uppercase tracking-wider">
              <Shield className="h-4 w-4" />
              <span>Safety-First Recovery</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              WHEN RECOVERY
              <br />
              <span className="text-primary">GOES WRONG,</span>
              <br />
              PEOPLE GET HURT
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Every year, improper recovery equipment causes serious injuries and deaths. 
              Cheap tow straps snap. Undersized ropes fail. Don't trust your safety to gear 
              that wasn't built for the job.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/90">
                  <span className="font-semibold text-white">Kinetic ropes stretch</span> — storing and releasing energy smoothly instead of snapping under shock loads
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/90">
                  <span className="font-semibold text-white">Every rope is tested</span> — we verify breaking strength on every batch, not just the first one
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/90">
                  <span className="font-semibold text-white">Made in USA</span> — quality control from raw materials to finished product
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
                <Link to="/learn/recovery-safety">
                  Learn Recovery Safety
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white hover:text-secondary">
                <Link to="/collections">
                  Shop Recovery Gear
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Warning Card */}
          <div className="relative">
            <div className="bg-background rounded-sm p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7 text-destructive" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Common Recovery Mistakes
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-destructive pl-4 py-2">
                  <h3 className="font-heading font-bold text-lg mb-1">Using Tow Straps for Recovery</h3>
                  <p className="text-muted-foreground text-sm">
                    Tow straps don't stretch. When they fail under load, they become deadly projectiles.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4 py-2">
                  <h3 className="font-heading font-bold text-lg mb-1">Undersized Equipment</h3>
                  <p className="text-muted-foreground text-sm">
                    A 20,000 lb rope can't safely recover a 7,000 lb vehicle stuck in deep mud.
                  </p>
                </div>

                <div className="border-l-4 border-destructive pl-4 py-2">
                  <h3 className="font-heading font-bold text-lg mb-1">Worn or Damaged Gear</h3>
                  <p className="text-muted-foreground text-sm">
                    UV damage, abrasions, and improper storage weaken recovery gear over time.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5">
                  <h3 className="font-heading font-bold text-lg mb-1 text-primary">The Solution</h3>
                  <p className="text-foreground text-sm">
                    Use properly rated kinetic recovery ropes from a manufacturer you trust. 
                    Learn proper technique. Inspect your gear before every use.
                  </p>
                </div>
              </div>

              <Link 
                to="/learn/equipment-guide"
                className="inline-flex items-center gap-2 mt-8 text-primary font-heading font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all"
              >
                Read Our Equipment Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* USA Badge */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-full flex flex-col items-center justify-center text-primary-foreground shadow-lg">
              <span className="text-xl">🇺🇸</span>
              <span className="text-xs font-heading font-bold uppercase">Made in USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
