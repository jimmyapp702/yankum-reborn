import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useCollections } from '@/hooks/useShopify';
import { Skeleton } from '@/components/ui/skeleton';

export default function Collections() {
  const { data, isLoading, error } = useCollections();
  const collections = data?.collections.edges.map(e => e.node) || [];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            SHOP BY <span className="text-primary">CATEGORY</span>
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            From kinetic recovery ropes to complete kits — find the gear that matches your vehicle and recovery needs.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-sm" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <h2 className="font-heading text-2xl font-bold mb-4">Unable to Load Collections</h2>
              <p className="text-muted-foreground mb-4">
                There was an issue connecting to the Shopify store.
              </p>
              <p className="text-sm text-destructive mb-6">
                {error instanceof Error ? error.message : 'Store may be unavailable or subscription inactive.'}
              </p>
              <p className="text-sm text-muted-foreground">
                Please ensure the Shopify store has an active subscription.
              </p>
            </div>
          ) : collections.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No collections found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  to={`/collections/${collection.handle}`}
                  className="group relative h-80 rounded-sm overflow-hidden"
                >
                  {collection.image ? (
                    <img
                      src={collection.image.url}
                      alt={collection.image.altText || collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                      {collection.title}
                    </h2>
                    {collection.description && (
                      <p className="text-white/80 text-sm line-clamp-2 mb-4 max-w-sm">
                        {collection.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-white font-heading text-sm uppercase tracking-wider group-hover:text-primary transition-colors">
                      <span>Shop Now</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
