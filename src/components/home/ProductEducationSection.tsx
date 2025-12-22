import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Weight, Shield, Wrench } from 'lucide-react';

const productTypes = [
  {
    title: 'Kinetic Recovery Ropes',
    description: 'Our core product. Double-braided nylon ropes that stretch to absorb shock loads and pull stuck vehicles free safely.',
    features: ['20-30% stretch capacity', 'Double-braided nylon', 'Reinforced eye loops', 'Multiple sizes available'],
    icon: Ruler,
    link: '/collections/kinetic-ropes',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Soft Shackles',
    description: 'Lightweight, strong, and safe alternative to metal D-rings. No projectile risk during recovery.',
    features: ['UHMWPE construction', 'Lighter than steel', 'No metal projectiles', 'Easy to inspect'],
    icon: Weight,
    link: '/collections/soft-shackles',
    image: 'https://images.unsplash.com/photo-1609668528780-e364738d8c4b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Recovery Kits',
    description: 'Complete kits with everything you need for vehicle recovery. Perfect for building your first kit or upgrading.',
    features: ['Matched components', 'Carrying bag included', 'Ready to use', 'Multiple kit levels'],
    icon: Wrench,
    link: '/collections/recovery-kits',
    image: 'https://images.unsplash.com/photo-1533591917954-27ebe5af4679?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Accessories',
    description: 'Tree savers, dampers, storage bags, and other essential accessories to complete your recovery setup.',
    features: ['Tree protectors', 'Recovery dampers', 'Storage solutions', 'Wear protection'],
    icon: Shield,
    link: '/collections/accessories',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80',
  },
];

export function ProductEducationSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-heading text-sm uppercase tracking-wider">
            Product Guide
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            UNDERSTAND YOUR <span className="text-primary">EQUIPMENT</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every piece of recovery gear serves a specific purpose. 
            Understanding what each component does helps you build the right kit for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {productTypes.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group bg-background rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center">
                      <product.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">{product.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary font-heading font-semibold uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
                    Shop {product.title.split(' ')[0]}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/collections"
            className="btn-secondary inline-flex"
          >
            View All Collections
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
