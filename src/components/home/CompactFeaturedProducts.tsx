import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useFeaturedProducts, useAddToCart } from '@/hooks/useShopify';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/types/shopify';

function formatPrice(amount: string, currencyCode: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast();
  const addToCart = useAddToCart();
  
  const firstVariant = product.variants.edges[0]?.node;
  const hasComparePrice = firstVariant?.compareAtPrice && 
    parseFloat(firstVariant.compareAtPrice.amount) > parseFloat(firstVariant.price.amount);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firstVariant) return;
    
    try {
      await addToCart.mutateAsync({
        merchandiseId: firstVariant.id,
        quantity: 1,
      });
      toast({
        title: 'Added to cart',
        description: `${product.title} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add item to cart.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Link
      to={`/products/${product.handle}`}
      className="group bg-background rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.featuredImage ? (
          <img
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            onClick={handleAddToCart}
            disabled={!product.availableForSale}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.availableForSale ? 'Quick Add' : 'Sold Out'}
          </Button>
        </div>

        {/* Sale Badge */}
        {hasComparePrice && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-heading uppercase">
            Sale
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-heading text-base font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold">
            {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
          </span>
          {hasComparePrice && firstVariant?.compareAtPrice && (
            <span className="text-muted-foreground line-through text-sm">
              {formatPrice(firstVariant.compareAtPrice.amount, firstVariant.compareAtPrice.currencyCode)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function CompactFeaturedProducts() {
  const { data, isLoading, error } = useFeaturedProducts(4);
  const products = data?.products.edges.map(e => e.node) || [];

  if (isLoading) {
    return (
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-10">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square rounded-sm" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-5 w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding bg-background">
        <div className="container-wide text-center py-12">
          <h2 className="font-heading text-2xl font-bold mb-4">Unable to Load Products</h2>
          <p className="text-muted-foreground mb-2">
            There was an issue connecting to the Shopify store.
          </p>
          <p className="text-sm text-destructive">
            {error instanceof Error ? error.message : 'Store may be unavailable or subscription inactive.'}
          </p>
        </div>
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="text-primary font-heading text-sm uppercase tracking-wider">
              Shop Now
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
              BEST SELLERS
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-foreground font-heading font-semibold uppercase tracking-wider text-sm hover:text-primary transition-colors"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
