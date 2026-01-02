import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { useCollections } from '@/hooks/useShopify';
import yankumLogo from '@/assets/yankum-logo.png';
import { GiveawayRules } from '@/components/giveaway/GiveawayRules';

export function Footer() {
  const { data: collectionsData } = useCollections();
  const collections = collectionsData?.collections.edges.map(e => e.node).slice(0, 5) || [];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <GiveawayRules />
      <div className="container-wide py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4 md:space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={yankumLogo} 
                alt="Yankum Ropes" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-xs">
              American-made recovery gear built for those who demand the best. 
              Trusted by off-road enthusiasts nationwide.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-3 py-1 rounded">
                🇺🇸 Made in USA
              </span>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-base md:text-lg uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/products" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  All Products
                </Link>
              </li>
              {collections.slice(0, 4).map((collection) => (
                <li key={collection.id}>
                  <Link
                    to={`/collections/${collection.handle}`}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block"
                  >
                    {collection.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-base md:text-lg uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/about" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  Learn Recovery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-base md:text-lg uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/shipping" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm md:text-base py-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-6">
            <p className="text-xs md:text-sm text-secondary-foreground/50 text-center md:text-left">
              © {new Date().getFullYear()} Yankum Ropes. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@yankum.com"
                className="p-3 hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
