import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCollections } from '@/hooks/useShopify';
import { Skeleton } from '@/components/ui/skeleton';

export function CompactCollections() {
  const { data, isLoading, error } = useCollections();
  const collections = data?.collections.edges.map(e => e.node).slice(0, 4) || [];

  if (isLoading) {
    return (
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-10">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding bg-muted">
        <div className="container-wide text-center py-12">
          <h2 className="font-heading text-2xl font-bold mb-4">Unable to Load Collections</h2>
          <p className="text-muted-foreground mb-2">
            There was an issue connecting to the Shopify store.
          </p>
          <p className="text-sm text-destructive">
            {error instanceof Error ? error.message : 'Store may be unavailable.'}
          </p>
        </div>
      </section>
    );
  }

  if (collections.length === 0) return null;

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="text-primary font-heading text-sm uppercase tracking-wider">
              Categories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
              SHOP BY CATEGORY
            </h2>
          </div>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-foreground font-heading font-semibold uppercase tracking-wider text-sm hover:text-primary transition-colors"
          >
            All Collections
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.handle}`}
              className="group relative h-64 rounded-sm overflow-hidden"
            >
              {collection.image ? (
                <img
                  src={collection.image.url}
                  alt={collection.image.altText || collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-secondary" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {collection.title}
                </h3>
                <div className="flex items-center gap-2 text-white/80 font-heading text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
