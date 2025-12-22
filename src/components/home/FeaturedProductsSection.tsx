import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
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
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>

        {/* Sale Badge */}
        {hasComparePrice && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-heading uppercase">
            Sale
          </div>
        )}

        {/* Out of Stock Badge */}
        {!product.availableForSale && (
          <div className="absolute top-3 right-3 bg-foreground text-background px-3 py-1 text-xs font-heading uppercase">
            Sold Out
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
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

export function FeaturedProductsSection() {
  const { data, isLoading } = useFeaturedProducts(8);
  const products = data?.products.edges.map(e => e.node) || [];

  if (isLoading) {
    return (
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square rounded-sm" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-5 w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            BEST <span className="text-primary">SELLERS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The gear trusted by thousands of off-road enthusiasts and recovery professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="btn-secondary inline-flex"
          >
            Shop All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
