import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Shield, Truck, Award, Check, ChevronRight, Minus, Plus } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useProductByHandle, useAddToCart } from '@/hooks/useShopify';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

function formatPrice(amount: string, currencyCode: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export default function Product() {
  const { handle } = useParams<{ handle: string }>();
  const { data, isLoading } = useProductByHandle(handle || '');
  const product = data?.productByHandle;
  const { toast } = useToast();
  const addToCart = useAddToCart();
  
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const variants = product?.variants.edges.map(e => e.node) || [];
  const selectedVariant = variants[selectedVariantIndex];
  const images = product?.images?.edges.map(e => e.node) || [];
  const selectedImage = images[selectedImageIndex] || product?.featuredImage;

  const hasComparePrice = selectedVariant?.compareAtPrice && 
    parseFloat(selectedVariant.compareAtPrice.amount) > parseFloat(selectedVariant.price.amount);

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    
    try {
      await addToCart.mutateAsync({
        merchandiseId: selectedVariant.id,
        quantity,
      });
      toast({
        title: 'Added to cart',
        description: `${product?.title} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add item to cart.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="aspect-square rounded-sm" />
              <div className="space-y-6">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-14 w-full" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <section className="section-padding text-center">
          <div className="container-wide">
            <h1 className="font-heading text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-foreground">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-sm overflow-hidden bg-muted">
                {selectedImage ? (
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image
                  </div>
                )}
              </div>
              
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                  {images.slice(0, 5).map((image, index) => (
                    <button
                      key={image.url}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square rounded-sm overflow-hidden border-2 transition-colors ${
                        index === selectedImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.altText || `${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading text-3xl font-bold">
                    {selectedVariant && formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
                  </span>
                  {hasComparePrice && selectedVariant?.compareAtPrice && (
                    <span className="text-muted-foreground line-through text-xl">
                      {formatPrice(selectedVariant.compareAtPrice.amount, selectedVariant.compareAtPrice.currencyCode)}
                    </span>
                  )}
                  {hasComparePrice && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-heading uppercase">
                      Sale
                    </span>
                  )}
                </div>
              </div>

              {/* Variants */}
              {variants.length > 1 && (
                <div>
                  <label className="font-heading font-semibold mb-3 block">
                    Size / Option
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {variants.map((variant, index) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariantIndex(index)}
                        disabled={!variant.availableForSale}
                        className={`px-4 py-2 border-2 font-heading text-sm transition-colors ${
                          index === selectedVariantIndex
                            ? 'border-primary bg-primary text-primary-foreground'
                            : variant.availableForSale
                            ? 'border-border hover:border-primary'
                            : 'border-border opacity-50 cursor-not-allowed line-through'
                        }`}
                      >
                        {variant.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="font-heading font-semibold mb-3 block">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-heading text-lg font-bold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="w-full btn-primary text-lg py-6"
                onClick={handleAddToCart}
                disabled={!product.availableForSale || addToCart.isPending}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.availableForSale ? 'Add to Cart' : 'Sold Out'}
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-heading uppercase">Lifetime Warranty</span>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-heading uppercase">Free Shipping $100+</span>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-heading uppercase">Made in USA</span>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div>
                  <h2 className="font-heading text-xl font-bold mb-4">Description</h2>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p>{product.description}</p>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="bg-muted p-6 rounded-sm">
                <h3 className="font-heading font-bold mb-4">Why Choose Yankum?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">100% American-made with USA materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Every batch tested to exceed rated specs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Backed by our lifetime warranty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Trusted by thousands of off-roaders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
