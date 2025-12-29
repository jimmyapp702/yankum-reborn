import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Weight, Shield, Wrench } from 'lucide-react';
const productTypes = [{
  title: 'Kinetic Recovery Ropes',
  description: 'Our core product. Double-braided nylon ropes that stretch to absorb shock loads and pull stuck vehicles free safely.',
  features: ['20-30% stretch capacity', 'Double-braided nylon', 'Reinforced eye loops', 'Multiple sizes available'],
  icon: Ruler,
  link: '/collections/kinetic-ropes',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80'
}, {
  title: 'Soft Shackles',
  description: 'Lightweight, strong, and safe alternative to metal D-rings. No projectile risk during recovery.',
  features: ['UHMWPE construction', 'Lighter than steel', 'No metal projectiles', 'Easy to inspect'],
  icon: Weight,
  link: '/collections/soft-shackles',
  image: 'https://images.unsplash.com/photo-1609668528780-e364738d8c4b?auto=format&fit=crop&w=600&q=80'
}, {
  title: 'Recovery Kits',
  description: 'Complete kits with everything you need for vehicle recovery. Perfect for building your first kit or upgrading.',
  features: ['Matched components', 'Carrying bag included', 'Ready to use', 'Multiple kit levels'],
  icon: Wrench,
  link: '/collections/recovery-kits',
  image: 'https://images.unsplash.com/photo-1533591917954-27ebe5af4679?auto=format&fit=crop&w=600&q=80'
}, {
  title: 'Accessories',
  description: 'Tree savers, dampers, storage bags, and other essential accessories to complete your recovery setup.',
  features: ['Tree protectors', 'Recovery dampers', 'Storage solutions', 'Wear protection'],
  icon: Shield,
  link: '/collections/accessories',
  image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80'
}];
export function ProductEducationSection() {
  return;
}