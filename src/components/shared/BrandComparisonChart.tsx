import { Check, Minus, AlertTriangle, Shield, Wrench, FileCheck, Award, HeadphonesIcon, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type FeatureStatus = 'yes' | 'partial' | 'no' | 'varies' | string;

interface ComparisonRow {
  feature: string;
  icon: React.ReactNode;
  yankum: FeatureStatus;
  quality: FeatureStatus;
  budget: FeatureStatus;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Kinetic Energy Stretch (20-30%)',
    icon: <Wrench className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'yes',
    budget: 'partial',
  },
  {
    feature: 'Vehicle Recovery Application',
    icon: <Shield className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'yes',
    budget: 'partial',
  },
  {
    feature: 'Standard Hardware Compatibility',
    icon: <Wrench className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'yes',
    budget: 'partial',
  },
  {
    feature: 'Made in USA',
    icon: <MapPin className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'varies',
    budget: 'no',
  },
  {
    feature: 'Batch Testing & Quality Control',
    icon: <FileCheck className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'varies',
    budget: 'no',
  },
  {
    feature: 'Documented Breaking Strength',
    icon: <FileCheck className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'varies',
    budget: 'partial',
  },
  {
    feature: 'Safety Margin Transparency',
    icon: <Shield className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'varies',
    budget: 'no',
  },
  {
    feature: 'Warranty & Customer Support',
    icon: <HeadphonesIcon className="h-5 w-5" />,
    yankum: 'Lifetime',
    quality: 'varies',
    budget: 'Limited',
  },
  {
    feature: 'Brand Accountability',
    icon: <Award className="h-5 w-5" />,
    yankum: 'yes',
    quality: 'yes',
    budget: 'no',
  },
];

function StatusCell({ status, isYankum = false }: { status: FeatureStatus; isYankum?: boolean }) {
  if (status === 'yes') {
    return (
      <div className={`flex items-center justify-center gap-2 ${isYankum ? 'text-primary' : 'text-green-500'}`}>
        <Check className="h-5 w-5" strokeWidth={3} />
      </div>
    );
  }
  
  if (status === 'partial') {
    return (
      <div className="flex items-center justify-center text-muted-foreground/60">
        <AlertTriangle className="h-4 w-4" />
      </div>
    );
  }
  
  if (status === 'no') {
    return (
      <div className="flex items-center justify-center text-muted-foreground/40">
        <Minus className="h-5 w-5" />
      </div>
    );
  }
  
  if (status === 'varies') {
    return (
      <span className="text-xs text-muted-foreground/70 uppercase tracking-wide">Varies</span>
    );
  }
  
  return (
    <span className={`text-sm font-medium ${isYankum ? 'text-primary' : 'text-muted-foreground/70'}`}>
      {status}
    </span>
  );
}

export function BrandComparisonChart() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-heading text-sm uppercase tracking-widest text-primary mb-4">
            Honest Comparison
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-foreground mb-4">
            HOW WE COMPARE
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
            We believe in transparency. Here's how Yankum stacks up against other recovery rope options on the market.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-secondary-foreground/10">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary-foreground/5">
                <th className="text-left py-5 px-6 font-heading text-sm uppercase tracking-wider text-secondary-foreground/70">
                  Feature
                </th>
                <th className="py-5 px-6 font-heading text-sm uppercase tracking-wider text-center bg-primary/10 border-x border-primary/20">
                  <span className="text-primary font-bold">Yankum Ropes</span>
                </th>
                <th className="py-5 px-6 font-heading text-sm uppercase tracking-wider text-secondary-foreground/70 text-center">
                  Other Quality Brands
                </th>
                <th className="py-5 px-6 font-heading text-sm uppercase tracking-wider text-secondary-foreground/50 text-center">
                  Budget / Import Ropes
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-t border-secondary-foreground/10 ${index % 2 === 0 ? 'bg-secondary' : 'bg-secondary-foreground/[0.02]'}`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3 text-secondary-foreground">
                      <span className="text-secondary-foreground/50">{row.icon}</span>
                      <span className="font-medium">{row.feature}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-primary/5 border-x border-primary/10">
                    <StatusCell status={row.yankum} isYankum />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <StatusCell status={row.quality} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <StatusCell status={row.budget} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div 
              key={index} 
              className="bg-secondary-foreground/5 rounded-lg p-4 border border-secondary-foreground/10"
            >
              <div className="flex items-center gap-3 text-secondary-foreground mb-4 pb-3 border-b border-secondary-foreground/10">
                <span className="text-secondary-foreground/50">{row.icon}</span>
                <span className="font-heading font-bold text-sm">{row.feature}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-primary font-heading font-bold">Yankum</p>
                  <div className="bg-primary/10 rounded py-2 border border-primary/20">
                    <StatusCell status={row.yankum} isYankum />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-secondary-foreground/60 font-heading">Quality</p>
                  <div className="bg-secondary-foreground/5 rounded py-2">
                    <StatusCell status={row.quality} />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-secondary-foreground/40 font-heading">Budget</p>
                  <div className="bg-secondary-foreground/[0.02] rounded py-2">
                    <StatusCell status={row.budget} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-secondary-foreground/60">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span>Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-muted-foreground/60" />
            <span>Limited / Inconsistent</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="h-4 w-4 text-muted-foreground/40" />
            <span>Not Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wide">Varies</span>
            <span>— Depends on Manufacturer</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-secondary-foreground/10">
          <p className="text-secondary-foreground/70 mb-6 max-w-xl mx-auto">
            When it matters most, choose recovery gear built for real-world conditions with documented performance and accountability.
          </p>
          <Button asChild size="lg" className="font-heading font-bold uppercase tracking-wider">
            <Link to="/products">
              Shop Yankum Recovery Gear
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
