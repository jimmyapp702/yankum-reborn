import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCollectionByHandle, useAddToCart } from '@/hooks/useShopify';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import type { Product } from '@/types/shopify';
import heroRopeImage from '@/assets/hero-kinetic-rope.png';

function formatPrice(amount: string, currencyCode: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

function HeroProductCard({ product }: { product: Product }) {
  const { toast } = useToast();
  const addToCart = useAddToCart();
  const firstVariant = product.variants.edges[0]?.node;

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
    <div className="group bg-white/10 backdrop-blur-sm rounded-sm overflow-hidden border border-white/20 hover:border-primary/50 transition-all">
      <Link to={`/products/${product.handle}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          {product.featuredImage ? (
            <img
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.handle}`}>
          <h3 className="font-heading text-sm font-bold text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-white">
            {formatPrice(product.priceRange.minVariantPrice.amount)}
          </span>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 px-3"
            onClick={handleAddToCart}
            disabled={!product.availableForSale}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function KineticRopesHero() {
  const { data, isLoading } = useCollectionByHandle('kinetic-ropes', 4);
  const collection = data?.collectionByHandle;
  const products = collection?.products?.edges.map(e => e.node) || [];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Background gradient only */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/80" />

      <div className="container-wide relative py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-heading uppercase tracking-wider">
              <Zap className="h-4 w-4" />
              <span>Kinetic Recovery Ropes</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              THE ROPE THAT
              <br />
              <span className="text-primary">STRETCHES</span>
              <br />
              SO YOU DON'T BREAK
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Unlike static tow straps that snap under load, our kinetic ropes stretch up to 30% — 
              storing energy and releasing it smoothly to pull you free without jarring shock loads.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary block">30%</span>
                <span className="text-white/70 text-xs uppercase tracking-wider">Stretch</span>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary block">52K+</span>
                <span className="text-white/70 text-xs uppercase tracking-wider">LBS Strength</span>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-sm border border-white/10">
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary block">100%</span>
                <span className="text-white/70 text-xs uppercase tracking-wider">USA Made</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Batch Tested</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image + CTA below */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Main Hero Image */}
            <div className="relative">
              <img
                src={heroRopeImage}
                alt="Yankum Kinetic Recovery Rope - 1 inch x 30 feet"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>

            {/* CTAs below image */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading text-lg px-8 py-6">
                <Link to="/products">
                  Shop Kinetic Ropes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading text-lg px-8 py-6">
                <Link to="/learn">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Products Section Below */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-bold text-white">
              Featured Kinetic Ropes
            </h2>
            <Link 
              to="/collections/kinetic-ropes"
              className="text-primary font-heading text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square rounded-sm bg-white/10" />
                  <Skeleton className="h-4 w-3/4 bg-white/10" />
                  <Skeleton className="h-4 w-1/2 bg-white/10" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <HeroProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white/5 rounded-sm p-8 text-center border border-white/10">
              <p className="text-white/60 mb-4">Browse our kinetic rope collection</p>
              <Link to="/collections/kinetic-ropes" className="btn-primary inline-flex">
                Shop Kinetic Ropes
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
