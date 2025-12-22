import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Video, FileText, Shield, AlertTriangle, Zap } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

export default function Learn() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            RECOVERY <span className="text-primary">EDUCATION</span>
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Learn the science behind kinetic recovery, proper techniques, and how to choose the right gear. 
            Your safety depends on understanding your equipment.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-muted rounded-sm">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Beginner's Guide</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Start here if you're new to vehicle recovery. Covers basics, equipment, and first-time tips.
              </p>
              <Link to="/learn/beginners-guide" className="text-primary font-heading text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all">
                Read Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-8 bg-muted rounded-sm">
              <Video className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch real recoveries and learn proper technique from experienced off-roaders.
              </p>
              <Link to="/learn/videos" className="text-primary font-heading text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all">
                Watch Videos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-8 bg-muted rounded-sm">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Sizing Chart</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Find the right rope size for your vehicle with our comprehensive sizing guide.
              </p>
              <Link to="/learn/sizing-guide" className="text-primary font-heading text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all">
                View Chart <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Topics */}
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Essential Topics
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-sm p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">How Kinetic Ropes Work</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Understanding the physics behind kinetic recovery helps you choose the right gear and use it safely. 
                Learn how energy storage and controlled release make kinetic ropes superior to static straps.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>20-30% stretch capacity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Double-braided nylon construction</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Smooth energy release vs. shock loads</span>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-sm p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-heading text-xl font-bold">Common Recovery Mistakes</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Every year, improper recovery equipment causes serious injuries. Learn what NOT to do 
                and how to avoid the most dangerous mistakes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full" />
                  <span>Never use tow straps for dynamic pulls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full" />
                  <span>Never use undersized equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full" />
                  <span>Never attach to non-rated points</span>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-sm p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Safety Best Practices</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Proper technique is just as important as proper equipment. Follow these guidelines 
                to keep yourself and others safe during every recovery.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Inspect equipment before every use</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Use properly rated equipment (2-3x GVWR)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Keep bystanders clear of the danger zone</span>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-sm p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Equipment Guide</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Understand what each piece of recovery gear does and how to build the right kit 
                for your vehicle and typical recovery scenarios.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Kinetic ropes vs. tow straps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Soft shackles vs. metal D-rings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Essential kit components</span>
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
            Ready to Get Equipped?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Now that you understand recovery gear, find the right equipment for your vehicle.
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
