import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SafetyGuidelinesSection() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-heading text-sm uppercase tracking-wider">
            Safety Guidelines
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            RECOVERY <span className="text-primary">BEST PRACTICES</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            Proper technique is just as important as proper equipment. 
            Follow these guidelines to keep yourself and others safe during every recovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* DO's */}
          <div className="bg-secondary-foreground/5 rounded-sm p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">DO's</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Inspect Equipment Before Every Use</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Check for cuts, abrasion, UV damage, and wear on loops. Replace damaged gear immediately.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Use Properly Rated Equipment</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Your rope's minimum breaking strength should be 2-3x the gross vehicle weight of the stuck vehicle.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Keep Bystanders Clear</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Maintain a safe zone of at least 1.5x the rope length on both sides of the recovery.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Use a Recovery Damper</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    A weighted damper (blanket, floor mat, or purpose-built damper) reduces recoil if the rope fails.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Connect to Frame-Mounted Points</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Always attach to rated recovery points welded to the vehicle frame, never to bumpers or suspension.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* DON'Ts */}
          <div className="bg-destructive/5 rounded-sm p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                <XCircle className="h-6 w-6 text-destructive-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">DON'Ts</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Never Use Tow Straps for Dynamic Pulls</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Tow straps don't stretch and can snap violently. They're only for slow, steady pulls.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Never Use Metal Hooks on Recovery Ropes</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Metal hooks become projectiles when equipment fails. Use soft shackles or loop-to-loop connections.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Never Stand in the "Danger Zone"</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Keep all people well outside the recoil path if the rope or attachment point fails.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Never Use Damaged or Worn Equipment</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    If you see fraying, cuts, or UV degradation, retire the rope. Your safety isn't worth the risk.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Never Exceed Working Load Limits</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Breaking strength ≠ working load. Always have a significant safety margin.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-secondary-foreground/5 rounded-sm p-8 md:p-10">
          <h3 className="font-heading text-2xl font-bold mb-8 text-center">
            Learn More About Safe Recovery
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/learn/beginners-guide"
              className="group flex flex-col items-center text-center p-6 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors"
            >
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-heading font-bold mb-2">Beginner's Guide</h4>
              <p className="text-secondary-foreground/70 text-sm mb-4">
                Start here if you're new to vehicle recovery. Covers basics, equipment, and first-time tips.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Read Guide
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link 
              to="/learn/videos"
              className="group flex flex-col items-center text-center p-6 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors"
            >
              <Video className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-heading font-bold mb-2">Video Tutorials</h4>
              <p className="text-secondary-foreground/70 text-sm mb-4">
                Watch real recoveries and learn proper technique from experienced off-roaders.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Watch Videos
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link 
              to="/learn/sizing-chart"
              className="group flex flex-col items-center text-center p-6 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors"
            >
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-heading font-bold mb-2">Rope Sizing Chart</h4>
              <p className="text-secondary-foreground/70 text-sm mb-4">
                Find the right rope size for your vehicle with our comprehensive sizing guide.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
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
