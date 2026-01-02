import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const sizingData = [
  {
    vehicleWeight: '4,000 - 6,000 lbs',
    vehicles: 'Jeep Wrangler, Toyota Tacoma',
    ropeSize: '7/8" x 20\'',
    breakingStrength: '28,600 lbs',
    recommended: false
  },
  {
    vehicleWeight: '6,000 - 8,000 lbs',
    vehicles: 'Full-size trucks, 4Runner',
    ropeSize: '7/8" x 30\'',
    breakingStrength: '28,600 lbs',
    recommended: true
  },
  {
    vehicleWeight: '8,000 - 12,000 lbs',
    vehicles: 'Heavy-duty trucks',
    ropeSize: '1" x 30\'',
    breakingStrength: '52,300 lbs',
    recommended: false
  },
  {
    vehicleWeight: '12,000+ lbs',
    vehicles: 'Super Duty, commercial',
    ropeSize: '1-1/4" x 30\'',
    breakingStrength: '74,000 lbs',
    recommended: false
  }
];

export function SizingGuideSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
            SIZING GUIDE
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Match your rope to your vehicle weight for optimal performance
          </p>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4">
          {sizingData.map((row, index) => (
            <div
              key={index}
              className={`p-4 rounded-sm border ${row.recommended ? 'border-primary bg-primary/5' : 'border-border'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-bold text-foreground">{row.ropeSize}</span>
                {row.recommended && (
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                    <Check className="w-3 h-3" /> Popular
                  </span>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vehicle Weight:</span>
                  <span className="font-medium">{row.vehicleWeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Breaking Strength:</span>
                  <span className="font-medium">{row.breakingStrength}</span>
                </div>
                <p className="text-muted-foreground text-xs pt-1">{row.vehicles}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground text-sm">Vehicle Weight</th>
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground text-sm">Examples</th>
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground text-sm">Rope Size</th>
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground text-sm">Breaking Strength</th>
              </tr>
            </thead>
            <tbody>
              {sizingData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${row.recommended ? 'bg-primary/5' : ''}`}
                >
                  <td className="py-4 px-4 font-medium text-foreground text-sm">
                    {row.vehicleWeight}
                    {row.recommended && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs text-primary font-semibold">
                        <Check className="w-3 h-3" /> Most Popular
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground text-sm">{row.vehicles}</td>
                  <td className="py-4 px-4 font-heading font-semibold text-foreground">{row.ropeSize}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row.breakingStrength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-6 md:mt-8">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline min-h-[44px] text-sm md:text-base"
          >
            Need help choosing? Read our guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
