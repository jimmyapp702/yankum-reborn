import { Zap, TrendingUp, Shield, Activity } from 'lucide-react';

export function KineticRopeScienceSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-heading text-sm uppercase tracking-wider">
            The Science
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            HOW KINETIC ROPES <span className="text-primary">ACTUALLY WORK</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understanding the physics behind kinetic recovery helps you choose the right gear 
            and use it safely. Here's what makes our ropes different from cheap alternatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Diagram Section */}
          <div className="relative bg-muted rounded-sm p-8 md:p-12">
            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">Initial Tension</h3>
                  <p className="text-muted-foreground">
                    The recovery vehicle accelerates, taking up slack in the rope. 
                    No sudden jerks — the rope begins to stretch gradually.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">Energy Storage</h3>
                  <p className="text-muted-foreground">
                    As the rope stretches up to 30%, it stores kinetic energy like a giant rubber band. 
                    This is where the "kinetic" in kinetic rope comes from.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">Controlled Release</h3>
                  <p className="text-muted-foreground">
                    The stored energy releases smoothly, adding pulling force to the recovery vehicle's 
                    momentum. The stuck vehicle is pulled free without jarring shock loads.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual rope stretch indicator */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Rope Stretch</span>
                <span className="text-sm font-heading font-bold text-primary">Up to 30%</span>
              </div>
              <div className="h-4 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-[30%] bg-gradient-to-r from-primary to-primary/70 rounded-full" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>0% (Rest)</span>
                <span>15%</span>
                <span>30% (Max)</span>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="space-y-8">
            <h3 className="font-heading text-2xl md:text-3xl font-bold">
              Kinetic Rope vs. Tow Strap
            </h3>

            <div className="grid gap-6">
              {/* Kinetic Rope */}
              <div className="bg-primary/5 border border-primary/20 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-heading text-lg font-bold">Kinetic Recovery Rope</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Stretches 20-30% to absorb shock loads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Double-braided nylon construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Stores and releases energy smoothly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Designed for dynamic recovery pulls</span>
                  </li>
                </ul>
              </div>

              {/* Tow Strap */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center">
                    <Activity className="h-5 w-5 text-destructive" />
                  </div>
                  <h4 className="font-heading text-lg font-bold">Tow Strap (NOT for Recovery)</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>Zero stretch — transfers all shock directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>Polyester webbing with metal hooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>Fails catastrophically under dynamic loads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>Only safe for slow, steady towing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center p-6 bg-muted rounded-sm">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
            <span className="font-heading text-3xl md:text-4xl font-bold block">30%</span>
            <span className="text-muted-foreground text-sm">Max Stretch</span>
          </div>
          <div className="text-center p-6 bg-muted rounded-sm">
            <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
            <span className="font-heading text-3xl md:text-4xl font-bold block">52K+</span>
            <span className="text-muted-foreground text-sm">LBS Breaking Strength</span>
          </div>
          <div className="text-center p-6 bg-muted rounded-sm">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <span className="font-heading text-3xl md:text-4xl font-bold block">100%</span>
            <span className="text-muted-foreground text-sm">Batch Tested</span>
          </div>
          <div className="text-center p-6 bg-muted rounded-sm">
            <Activity className="h-8 w-8 text-primary mx-auto mb-4" />
            <span className="font-heading text-3xl md:text-4xl font-bold block">0</span>
            <span className="text-muted-foreground text-sm">Metal Parts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
