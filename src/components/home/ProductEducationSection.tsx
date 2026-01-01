import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Weight, Shield, Wrench } from 'lucide-react';

const productTypes = [
  {
    title: 'Kinetic Recovery Ropes',
    description: 'Our core product. Double-braided nylon ropes that stretch to absorb shock loads and pull stuck vehicles free safely.',
    features: ['20-30% stretch capacity', 'Double-braided nylon', 'Reinforced eye loops', 'Multiple sizes available'],
    icon: Ruler,
    link: '/collections/kinetic-ropes',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Soft Shackles',
    description: 'Lightweight, strong, and safe alternative to metal D-rings. No projectile risk during recovery.',
    features: ['UHMWPE construction', 'Lighter than steel', 'No metal projectiles', 'Easy to inspect'],
    icon: Weight,
    link: '/collections/soft-shackles',
    image: 'https://images.unsplash.com/photo-1609668528780-e364738d8c4b?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Recovery Kits',
    description: 'Complete kits with everything you need for vehicle recovery. Perfect for building your first kit or upgrading.',
    features: ['Matched components', 'Carrying bag included', 'Ready to use', 'Multiple kit levels'],
    icon: Wrench,
    link: '/collections/recovery-kits',
    image: 'https://images.unsplash.com/photo-1533591917954-27ebe5af4679?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Accessories',
    description: 'Tree savers, dampers, storage bags, and other essential accessories to complete your recovery setup.',
    features: ['Tree protectors', 'Recovery dampers', 'Storage solutions', 'Wear protection'],
    icon: Shield,
    link: '/collections/accessories',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80'
  }
];

export function ProductEducationSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            PRODUCT CATEGORIES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for safe, effective vehicle recovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productTypes.map((product) => (
            <Link
              key={product.title}
              to={product.link}
              className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <product.icon className="absolute bottom-4 left-4 w-8 h-8 text-primary-foreground" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>
                <ul className="space-y-1">
                  {product.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Shop Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}