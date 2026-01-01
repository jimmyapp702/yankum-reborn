import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCollectionByHandle } from '@/hooks/useShopify';
import { Skeleton } from '@/components/ui/skeleton';

const MULTIPLIER = 20;
const FEATURED_COLLECTION_HANDLE = 'kinetic-recovery-ropes';

export function FeaturedMultiplierCollection() {
  const { data, isLoading } = useCollectionByHandle(FEATURED_COLLECTION_HANDLE, 4);
  const products = data?.collectionByHandle?.products?.edges || [];

  return (
    <section className="py-20 bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider mb-3">
              {MULTIPLIER}X Entries
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-secondary-foreground">
              Featured Products
            </h2>
          </div>
          <Link 
            to={`/collection/${FEATURED_COLLECTION_HANDLE}`}
            className="inline-flex items-center gap-1 text-primary text-sm font-heading font-semibold hover:underline"
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Products grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-square w-full mb-3" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(({ node: product }) => {
              const price = parseFloat(product.priceRange.minVariantPrice.amount);
              const entries = Math.floor(price) * MULTIPLIER;
              
              return (
                <Link 
                  key={product.id}
                  to={`/product/${product.handle}`}
                  className="group bg-background"
                >
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    {product.featuredImage ? (
                      <img 
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        No Image
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-0.5 text-xs font-heading font-bold">
                      {MULTIPLIER}X
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${price.toFixed(0)}
                      </span>
                      <span className="text-primary font-heading font-bold">
                        {entries.toLocaleString()} entries
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
