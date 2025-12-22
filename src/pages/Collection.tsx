import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Filter, Grid, List } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useCollectionByHandle, useAddToCart } from '@/hooks/useShopify';
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
      className="group bg-background rounded-sm overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
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
        
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            className="w-full btn-primary"
            onClick={handleAddToCart}
            disabled={!product.availableForSale}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.availableForSale ? 'Add to Cart' : 'Sold Out'}
          </Button>
        </div>

        {hasComparePrice && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-heading uppercase">
            Sale
          </div>
        )}

        {!product.availableForSale && (
          <div className="absolute top-3 right-3 bg-foreground text-background px-3 py-1 text-xs font-heading uppercase">
            Sold Out
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {product.description}
          </p>
        )}
        <div className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold">
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

export default function Collection() {
  const { handle } = useParams<{ handle: string }>();
  const { data, isLoading } = useCollectionByHandle(handle || '');
  const collection = data?.collection;
  const products = collection?.products.edges.map(e => e.node) || [];

  if (isLoading) {
    return (
      <Layout>
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container-wide">
            <Skeleton className="h-12 w-64 mb-4" />
            <Skeleton className="h-6 w-96" />
          </div>
        </section>
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="aspect-square rounded-sm mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-1/4" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!collection) {
    return (
      <Layout>
        <section className="section-padding text-center">
          <div className="container-wide">
            <h1 className="font-heading text-4xl font-bold mb-4">Collection Not Found</h1>
            <p className="text-muted-foreground mb-8">The collection you're looking for doesn't exist.</p>
            <Link to="/collections" className="btn-primary">
              View All Collections
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground py-16 md:py-24 overflow-hidden">
        {collection.image && (
          <div className="absolute inset-0">
            <img
              src={collection.image.url}
              alt={collection.image.altText || collection.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
        )}
        <div className="container-wide relative">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {collection.title}
          </h1>
          {collection.description && (
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">
              {collection.description}
            </p>
          )}
          <p className="text-sm text-secondary-foreground/60 mt-4">
            {products.length} {products.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products in this collection yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
