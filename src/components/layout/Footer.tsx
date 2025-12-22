import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { useCollections } from '@/hooks/useShopify';
import yankumLogo from '@/assets/yankum-logo.png';

export function Footer() {
  const { data: collectionsData } = useCollections();
  const collections = collectionsData?.collections.edges.map(e => e.node).slice(0, 5) || [];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={yankumLogo} 
                alt="Yankum Ropes" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              American-made recovery gear built for those who demand the best. 
              Trusted by off-road enthusiasts, overlanders, and professionals nationwide.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-3 py-1 rounded">
                🇺🇸 Made in USA
              </span>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  All Products
                </Link>
              </li>
              {collections.map((collection) => (
                <li key={collection.id}>
                  <Link
                    to={`/collections/${collection.handle}`}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {collection.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Learn Recovery Gear
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/ambassadors" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Ambassadors
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@yankum.com"
                className="p-2 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-secondary-foreground/50">
              © {new Date().getFullYear()} Yankum Ropes. All rights reserved. Built with pride in the USA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
