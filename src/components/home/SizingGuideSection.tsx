import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const sizingData = [
  { 
    vehicleWeight: '4,000 - 6,000 lbs',
    vehicles: 'Jeep Wrangler, Toyota Tacoma, Ford Bronco',
    ropeSize: '7/8" x 20\'',
    breakingStrength: '28,600 lbs',
    recommended: false,
  },
  { 
    vehicleWeight: '6,000 - 8,000 lbs',
    vehicles: 'Full-size trucks, Jeep Gladiator, 4Runner',
    ropeSize: '7/8" x 30\'',
    breakingStrength: '28,600 lbs',
    recommended: true,
  },
  { 
    vehicleWeight: '8,000 - 12,000 lbs',
    vehicles: 'Heavy-duty trucks, Sprinter vans, commercial vehicles',
    ropeSize: '1" x 30\'',
    breakingStrength: '52,300 lbs',
    recommended: false,
  },
  { 
    vehicleWeight: '12,000+ lbs',
    vehicles: 'Super Duty trucks, commercial equipment',
    ropeSize: '1-1/4" x 30\'',
    breakingStrength: '74,000 lbs',
    recommended: false,
  },
];

export function SizingGuideSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-heading text-sm uppercase tracking-wider">
            Sizing Guide
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            FIND THE RIGHT <span className="text-primary">ROPE SIZE</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choosing the right rope is critical for safe recovery. Use our sizing chart 
            to find the rope that matches your vehicle's weight and recovery needs.
          </p>
        </div>

        {/* Sizing Table */}
        <div className="bg-muted rounded-sm overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary text-secondary-foreground">
                  <th className="px-6 py-4 text-left font-heading font-bold uppercase text-sm tracking-wider">
                    Vehicle Weight (GVWR)
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 inline ml-2 opacity-70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Gross Vehicle Weight Rating - the maximum loaded weight of your vehicle. Find it on the door jamb sticker.</p>
                      </TooltipContent>
                    </Tooltip>
                  </th>
                  <th className="px-6 py-4 text-left font-heading font-bold uppercase text-sm tracking-wider">
                    Example Vehicles
                  </th>
                  <th className="px-6 py-4 text-left font-heading font-bold uppercase text-sm tracking-wider">
                    Recommended Rope
                  </th>
                  <th className="px-6 py-4 text-left font-heading font-bold uppercase text-sm tracking-wider">
                    Breaking Strength
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizingData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-t border-border ${row.recommended ? 'bg-primary/5' : ''}`}
                  >
                    <td className="px-6 py-5">
                      <span className="font-heading font-bold">{row.vehicleWeight}</span>
                      {row.recommended && (
                        <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-sm font-heading uppercase">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-muted-foreground text-sm">
                      {row.vehicles}
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-heading font-bold text-primary">{row.ropeSize}</span>
                    </td>
                    <td className="px-6 py-5 font-heading font-semibold">
                      {row.breakingStrength}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-muted p-6 rounded-sm">
            <h3 className="font-heading font-bold text-lg mb-3">Why Size Matters</h3>
            <p className="text-muted-foreground text-sm">
              Undersized ropes can fail. Oversized ropes don't stretch enough to work effectively. 
              Match your rope to your vehicle for optimal performance.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-sm">
            <h3 className="font-heading font-bold text-lg mb-3">Length Considerations</h3>
            <p className="text-muted-foreground text-sm">
              20' ropes work for most trail recoveries. 30' ropes give you more working room 
              and better energy storage for tough extractions.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-sm">
            <h3 className="font-heading font-bold text-lg mb-3">When in Doubt</h3>
            <p className="text-muted-foreground text-sm">
              If you're between sizes, go up. Extra breaking strength never hurt anyone. 
              Contact us if you need help choosing — we're here to help.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/learn/sizing-guide"
            className="btn-outline inline-flex"
          >
            Full Sizing Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
