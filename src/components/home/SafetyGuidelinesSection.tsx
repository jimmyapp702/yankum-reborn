import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';

export function SafetyGuidelinesSection() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <span className="text-primary font-heading text-xs md:text-sm uppercase tracking-wider">
            Safety Guidelines
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            RECOVERY <span className="text-primary">BEST PRACTICES</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-secondary-foreground/80 leading-relaxed px-2">
            Proper technique is just as important as proper equipment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-10 md:mb-16">
          {/* DO's */}
          <div className="bg-secondary-foreground/5 rounded-sm p-5 sm:p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold">DO's</h3>
            </div>

            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Inspect Equipment Before Every Use</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    Check for cuts, abrasion, UV damage, and wear on loops.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Use Properly Rated Equipment</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    Breaking strength should be 2-3x the gross vehicle weight.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Keep Bystanders Clear</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    Maintain a safe zone of at least 1.5x the rope length.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Use a Recovery Damper</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    A weighted damper reduces recoil if the rope fails.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* DON'Ts */}
          <div className="bg-destructive/5 rounded-sm p-5 sm:p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-destructive rounded-full flex items-center justify-center">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-destructive-foreground" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold">DON'Ts</h3>
            </div>

            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3 md:gap-4">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Never Use Tow Straps for Dynamic Pulls</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    Tow straps don't stretch and can snap violently.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Never Use Metal Hooks</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    Metal hooks become projectiles when equipment fails.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Never Stand in the "Danger Zone"</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    Keep all people outside the recoil path.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <XCircle className="h-5 w-5 md:h-6 md:w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm md:text-base mb-1">Never Use Damaged Equipment</h4>
                  <p className="text-secondary-foreground/70 text-xs md:text-sm">
                    If you see fraying, cuts, or UV degradation, retire the rope.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-secondary-foreground/5 rounded-sm p-5 sm:p-6 md:p-10">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
            Learn More About Safe Recovery
          </h3>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Link 
              to="/learn/beginners-guide"
              className="group flex flex-col items-center text-center p-5 md:p-6 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors min-h-[44px]"
            >
              <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h4 className="font-heading font-bold text-sm md:text-base mb-2">Beginner's Guide</h4>
              <p className="text-secondary-foreground/70 text-xs md:text-sm mb-3 md:mb-4">
                Start here if you're new to vehicle recovery.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-heading text-xs md:text-sm uppercase tracking-wider group-hover:gap-3 transition-all mt-auto">
                Read Guide
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link 
              to="/learn/videos"
              className="group flex flex-col items-center text-center p-5 md:p-6 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors min-h-[44px]"
            >
              <Video className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h4 className="font-heading font-bold text-sm md:text-base mb-2">Video Tutorials</h4>
              <p className="text-secondary-foreground/70 text-xs md:text-sm mb-3 md:mb-4">
                Watch real recoveries and learn proper technique.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-heading text-xs md:text-sm uppercase tracking-wider group-hover:gap-3 transition-all mt-auto">
                Watch Videos
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link 
              to="/learn/sizing-chart"
              className="group flex flex-col items-center text-center p-5 md:p-6 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors min-h-[44px]"
            >
              <FileText className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h4 className="font-heading font-bold text-sm md:text-base mb-2">Rope Sizing Chart</h4>
              <p className="text-secondary-foreground/70 text-xs md:text-sm mb-3 md:mb-4">
                Find the right rope size for your vehicle.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-heading text-xs md:text-sm uppercase tracking-wider group-hover:gap-3 transition-all mt-auto">
                View Chart
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
