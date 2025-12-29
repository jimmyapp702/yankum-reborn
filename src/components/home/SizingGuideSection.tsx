import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
const sizingData = [{
  vehicleWeight: '4,000 - 6,000 lbs',
  vehicles: 'Jeep Wrangler, Toyota Tacoma, Ford Bronco',
  ropeSize: '7/8" x 20\'',
  breakingStrength: '28,600 lbs',
  recommended: false
}, {
  vehicleWeight: '6,000 - 8,000 lbs',
  vehicles: 'Full-size trucks, Jeep Gladiator, 4Runner',
  ropeSize: '7/8" x 30\'',
  breakingStrength: '28,600 lbs',
  recommended: true
}, {
  vehicleWeight: '8,000 - 12,000 lbs',
  vehicles: 'Heavy-duty trucks, Sprinter vans, commercial vehicles',
  ropeSize: '1" x 30\'',
  breakingStrength: '52,300 lbs',
  recommended: false
}, {
  vehicleWeight: '12,000+ lbs',
  vehicles: 'Super Duty trucks, commercial equipment',
  ropeSize: '1-1/4" x 30\'',
  breakingStrength: '74,000 lbs',
  recommended: false
}];
export function SizingGuideSection() {
  return;
}