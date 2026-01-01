import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const sizingData = [
  {
    vehicleWeight: '4,000 - 6,000 lbs',
    vehicles: 'Jeep Wrangler, Toyota Tacoma, Ford Bronco',
    ropeSize: '7/8" x 20\'',
    breakingStrength: '28,600 lbs',
    recommended: false
  },
  {
    vehicleWeight: '6,000 - 8,000 lbs',
    vehicles: 'Full-size trucks, Jeep Gladiator, 4Runner',
    ropeSize: '7/8" x 30\'',
    breakingStrength: '28,600 lbs',
    recommended: true
  },
  {
    vehicleWeight: '8,000 - 12,000 lbs',
    vehicles: 'Heavy-duty trucks, Sprinter vans, commercial vehicles',
    ropeSize: '1" x 30\'',
    breakingStrength: '52,300 lbs',
    recommended: false
  },
  {
    vehicleWeight: '12,000+ lbs',
    vehicles: 'Super Duty trucks, commercial equipment',
    ropeSize: '1-1/4" x 30\'',
    breakingStrength: '74,000 lbs',
    recommended: false
  }
];

export function SizingGuideSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            SIZING GUIDE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            Match your rope to your vehicle weight for optimal performance
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Breaking strength should be 3-4x your vehicle's GVWR for safe recovery operations.</p>
              </TooltipContent>
            </Tooltip>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">Vehicle Weight</th>
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">Examples</th>
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">Rope Size</th>
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">Breaking Strength</th>
              </tr>
            </thead>
            <tbody>
              {sizingData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${row.recommended ? 'bg-primary/5' : ''}`}
                >
                  <td className="py-4 px-4 font-medium text-foreground">
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

        <div className="text-center mt-8">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Need help choosing? Read our complete guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}