import { Zap, TrendingUp, Shield, Activity } from 'lucide-react';

export function KineticRopeScienceSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <span className="text-primary font-heading text-xs md:text-sm uppercase tracking-wider">
            The Science
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
            HOW KINETIC ROPES <span className="text-primary">ACTUALLY WORK</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed px-2">
            Understanding the physics behind kinetic recovery helps you choose the right gear 
            and use it safely.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 md:mb-20">
          {/* Diagram Section */}
          <div className="relative bg-muted rounded-sm p-5 sm:p-8 md:p-12">
            <div className="space-y-5 md:space-y-8">
              {/* Phase 1 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg md:text-xl">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-1 md:mb-2">Initial Tension</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    The recovery vehicle accelerates, taking up slack. The rope begins to stretch gradually.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg md:text-xl">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-1 md:mb-2">Energy Storage</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    As the rope stretches up to 30%, it stores kinetic energy like a giant rubber band.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg md:text-xl">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-1 md:mb-2">Controlled Release</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    The stored energy releases smoothly, pulling the stuck vehicle free without jarring shock loads.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual rope stretch indicator */}
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="text-xs md:text-sm font-medium">Rope Stretch</span>
                <span className="text-xs md:text-sm font-heading font-bold text-primary">Up to 30%</span>
              </div>
              <div className="h-3 md:h-4 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-[30%] bg-gradient-to-r from-primary to-primary/70 rounded-full" />
              </div>
              <div className="flex justify-between mt-1.5 md:mt-2 text-[10px] md:text-xs text-muted-foreground">
                <span>0% (Rest)</span>
                <span>15%</span>
                <span>30% (Max)</span>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold">
              Kinetic Rope vs. Tow Strap
            </h3>

            <div className="grid gap-4 md:gap-6">
              {/* Kinetic Rope */}
              <div className="bg-primary/5 border border-primary/20 rounded-sm p-4 md:p-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <h4 className="font-heading text-base md:text-lg font-bold">Kinetic Recovery Rope</h4>
                </div>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
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
              <div className="bg-destructive/5 border border-destructive/20 rounded-sm p-4 md:p-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-destructive/20 rounded-full flex items-center justify-center">
                    <Activity className="h-4 w-4 md:h-5 md:w-5 text-destructive" />
                  </div>
                  <h4 className="font-heading text-base md:text-lg font-bold">Tow Strap (NOT for Recovery)</h4>
                </div>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          <div className="text-center p-4 md:p-6 bg-muted rounded-sm">
            <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-4" />
            <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold block">30%</span>
            <span className="text-muted-foreground text-xs md:text-sm">Max Stretch</span>
          </div>
          <div className="text-center p-4 md:p-6 bg-muted rounded-sm">
            <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-4" />
            <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold block">52K+</span>
            <span className="text-muted-foreground text-xs md:text-sm">LBS Breaking Strength</span>
          </div>
          <div className="text-center p-4 md:p-6 bg-muted rounded-sm">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-4" />
            <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold block">100%</span>
            <span className="text-muted-foreground text-xs md:text-sm">Batch Tested</span>
          </div>
          <div className="text-center p-4 md:p-6 bg-muted rounded-sm">
            <Activity className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-2 md:mb-4" />
            <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold block">0</span>
            <span className="text-muted-foreground text-xs md:text-sm">Metal Parts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
