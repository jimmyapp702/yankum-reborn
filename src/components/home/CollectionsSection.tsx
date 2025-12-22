import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCollections } from '@/hooks/useShopify';
import { Skeleton } from '@/components/ui/skeleton';

export function CollectionsSection() {
  const { data, isLoading } = useCollections();
  const collections = data?.collections.edges.map(e => e.node).slice(0, 6) || [];

  if (isLoading) {
    return (
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            SHOP BY <span className="text-primary">CATEGORY</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From kinetic ropes to complete recovery kits — everything you need to get unstuck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.handle}`}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-[600px]' : 'h-80'} overflow-hidden`}>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <h3 className={`font-heading font-bold text-white mb-2 ${
                    index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                  }`}>
                    {collection.title}
                  </h3>
                  {collection.description && (
                    <p className="text-white/80 text-sm line-clamp-2 mb-4 max-w-md">
                      {collection.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-white font-heading text-sm uppercase tracking-wider">
                    <span>Shop Now</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="btn-outline inline-flex"
          >
            View All Collections
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
