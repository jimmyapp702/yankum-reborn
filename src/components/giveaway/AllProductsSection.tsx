import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProducts } from '@/hooks/useShopify';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export function AllProductsSection() {
  const { data, isLoading } = useProducts(8);
  const products = data?.products?.edges || [];

  return (
    <section className="py-20 bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider mb-3">
              $1 = 1 Entry
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-secondary-foreground">
              All Products
            </h2>
          </div>
          <Link 
            to="/products"
            className="inline-flex items-center gap-1 text-secondary-foreground text-sm font-heading font-semibold hover:text-primary transition-colors"
          >
            Shop All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Products grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
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
              const entries = Math.floor(price);
              
              return (
                <Link 
                  key={product.id}
                  to={`/product/${product.handle}`}
                  className="group bg-muted"
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
                  </div>
                  <div className="p-3 bg-background">
                    <h3 className="font-heading font-semibold text-sm text-secondary-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${price.toFixed(0)}
                      </span>
                      <span className="text-secondary-foreground font-heading font-semibold">
                        {entries} entries
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
