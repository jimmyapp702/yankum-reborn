import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useProducts } from '@/hooks/useShopify';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export function AllProductsSection() {
  const { data, isLoading } = useProducts(8);
  const products = data?.products?.edges || [];

  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm uppercase tracking-wider">
              $1 = 1 Entry
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
            All Products
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every dollar you spend earns you one entry into the giveaway.
          </p>
        </div>

        {/* Products grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(({ node: product }) => {
              const price = parseFloat(product.priceRange.minVariantPrice.amount);
              const entries = Math.floor(price);
              
              return (
                <Link 
                  key={product.id}
                  to={`/product/${product.handle}`}
                  className="group bg-muted rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    {product.featuredImage ? (
                      <img 
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText || product.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        ${price.toFixed(2)}
                      </span>
                      <span className="text-foreground font-heading font-semibold text-sm">
                        {entries.toLocaleString()} entries
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* View all link */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/products" className="inline-flex items-center gap-2">
              Shop All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
