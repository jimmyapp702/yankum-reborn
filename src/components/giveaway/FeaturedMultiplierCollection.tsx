import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCollectionByHandle } from '@/hooks/useShopify';
import { Skeleton } from '@/components/ui/skeleton';

const MULTIPLIER = 20;
const FEATURED_COLLECTION_HANDLE = 'kinetic-recovery-ropes';

// Product specs for display (would ideally come from product metafields)
const productSpecs: Record<string, { workingLoad: string; breakStrength: string; size: string }> = {
  'racer': { workingLoad: '1,400 lbs', breakStrength: '7,000 lbs', size: '1/2"' },
  'viper': { workingLoad: '2,900 lbs', breakStrength: '14,800 lbs', size: '5/8"' },
  'rubber': { workingLoad: '3,800 lbs', breakStrength: '19,000 lbs', size: '3/4"' },
  'python': { workingLoad: '5,700 lbs', breakStrength: '28,600 lbs', size: '7/8"' },
};

function getProductSpecs(title: string) {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('racer')) return productSpecs['racer'];
  if (lowerTitle.includes('viper')) return productSpecs['viper'];
  if (lowerTitle.includes('rubber')) return productSpecs['rubber'];
  if (lowerTitle.includes('python')) return productSpecs['python'];
  return { workingLoad: '—', breakStrength: '—', size: '—' };
}

export function FeaturedMultiplierCollection() {
  const { data, isLoading } = useCollectionByHandle(FEATURED_COLLECTION_HANDLE, 4);
  const products = data?.collectionByHandle?.products?.edges || [];

  return (
    <section className="py-20 bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 text-sm font-heading font-bold uppercase tracking-wider mb-4">
              {MULTIPLIER}X Entries
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground">
              Featured Products
            </h2>
          </div>
          <Link 
            to={`/collection/${FEATURED_COLLECTION_HANDLE}`}
            className="inline-flex items-center gap-2 text-primary text-base font-heading font-semibold hover:underline"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-[4/5] w-full mb-4" />
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(({ node: product }) => {
              const price = parseFloat(product.priceRange.minVariantPrice.amount);
              const entries = Math.floor(price) * MULTIPLIER;
              const specs = getProductSpecs(product.title);
              
              return (
                <Link 
                  key={product.id}
                  to={`/product/${product.handle}`}
                  className="group"
                >
                  {/* Product Card */}
                  <div className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Image Container */}
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      {product.featuredImage ? (
                        <img 
                          src={product.featuredImage.url}
                          alt={product.featuredImage.altText || product.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                          No Image
                        </div>
                      )}
                      
                      {/* Multiplier Badge */}
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 text-sm font-heading font-bold shadow-md">
                        {MULTIPLIER}X
                      </div>
                      
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4 bg-card">
                      <h3 className="font-heading font-bold text-secondary-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 min-h-[2.5rem]">
                        {product.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-lg">
                          ${price.toFixed(0)}
                        </span>
                        <span className="text-primary font-heading font-bold text-lg">
                          {entries.toLocaleString()} entries
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Multiplier Explanation */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-bold">{MULTIPLIER}X Multiplier</span> — Every $1 spent = {MULTIPLIER} giveaway entries
          </p>
        </div>
      </div>
    </section>
  );
}
