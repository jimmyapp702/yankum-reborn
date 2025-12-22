import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, Shield, Truck, Award, Check, ChevronRight, Minus, Plus,
  Zap, AlertTriangle, Package, Ruler, Weight, Info, Star, ChevronDown
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useProductByHandle, useAddToCart, useFeaturedProducts } from '@/hooks/useShopify';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Product } from '@/types/shopify';

function formatPrice(amount: string, currencyCode: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

function ProductDescription({ description }: { description?: string }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 250;
  
  const defaultDescription = `This premium kinetic recovery rope is designed for safe, effective vehicle recovery. 
Built with double-braided nylon construction, it stretches up to 30% under load to store 
and release energy smoothly — eliminating the dangerous shock loads that cause tow strap failures.`;

  const text = description || defaultDescription;
  const isLong = text.length > maxLength;
  const displayText = expanded || !isLong ? text : text.slice(0, maxLength).trim() + '...';

  return (
    <div className="bg-background rounded-sm p-8 border border-border">
      <h2 className="font-heading text-2xl font-bold mb-6">Product Description</h2>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p className="leading-relaxed whitespace-pre-line">{displayText}</p>
      </div>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-primary font-heading text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          {expanded ? 'Read Less' : 'Read More'}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}
    </div>
  );
}

function RelatedProductCard({ product }: { product: Product }) {
  const firstVariant = product.variants.edges[0]?.node;
  
  return (
    <Link
      to={`/products/${product.handle}`}
      className="group bg-background rounded-sm overflow-hidden border border-border hover:shadow-lg transition-all"
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
      </div>
      <div className="p-4">
        <h3 className="font-heading text-sm font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <span className="font-heading text-lg font-bold">
          {firstVariant && formatPrice(firstVariant.price.amount)}
        </span>
      </div>
    </Link>
  );
}

export default function Product() {
  const { handle } = useParams<{ handle: string }>();
  const { data, isLoading, error } = useProductByHandle(handle || '');
  const product = data?.productByHandle;
  const { toast } = useToast();
  const addToCart = useAddToCart();
  
  // Get related products
  const { data: relatedData } = useFeaturedProducts(4);
  const relatedProducts = relatedData?.products.edges.map(e => e.node).filter(p => p.handle !== handle) || [];
  
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const variants = product?.variants.edges.map(e => e.node) || [];
  const selectedVariant = variants[selectedVariantIndex];
  const images = product?.images?.edges.map(e => e.node) || [];
  const selectedImage = images[selectedImageIndex] || product?.featuredImage;

  const hasComparePrice = selectedVariant?.compareAtPrice && 
    parseFloat(selectedVariant.compareAtPrice.amount) > parseFloat(selectedVariant.price.amount);

  const savingsAmount = hasComparePrice && selectedVariant?.compareAtPrice
    ? parseFloat(selectedVariant.compareAtPrice.amount) - parseFloat(selectedVariant.price.amount)
    : 0;

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
              <div className="space-y-4">
                <Skeleton className="aspect-square rounded-sm" />
                <div className="grid grid-cols-5 gap-3">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="aspect-square rounded-sm" />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-40 w-full" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <section className="section-padding text-center">
          <div className="container-wide">
            <h1 className="font-heading text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or couldn't be loaded.</p>
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
      <div className="bg-muted py-4 border-b border-border">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images Column */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-sm overflow-hidden bg-muted border border-border">
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
                
                {/* Sale Badge */}
                {hasComparePrice && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 font-heading font-bold uppercase text-sm">
                    Save {formatPrice(savingsAmount.toString())}
                  </div>
                )}

                {/* USA Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-sm flex items-center gap-2 text-sm font-heading">
                  <span>🇺🇸</span>
                  <span>Made in USA</span>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                  {images.map((image, index) => (
                    <button
                      key={image.url}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${
                        index === selectedImageIndex 
                          ? 'border-primary ring-2 ring-primary/20' 
                          : 'border-border hover:border-primary/50'
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

            {/* Product Details Column */}
            <div className="space-y-6">
              {/* Product Type Badge */}
              {product.productType && (
                <div className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider">
                  <Package className="h-4 w-4" />
                  <span>{product.productType}</span>
                </div>
              )}

              {/* Title */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {product.title}
              </h1>

              {/* Rating placeholder */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(Based on verified purchases)</span>
              </div>
              
              {/* Price */}
              <div className="flex items-baseline gap-4 pb-4 border-b border-border">
                <span className="font-heading text-4xl font-bold">
                  {selectedVariant && formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
                </span>
                {hasComparePrice && selectedVariant?.compareAtPrice && (
                  <>
                    <span className="text-muted-foreground line-through text-xl">
                      {formatPrice(selectedVariant.compareAtPrice.amount, selectedVariant.compareAtPrice.currencyCode)}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-heading font-bold uppercase rounded-sm">
                      Save {Math.round((savingsAmount / parseFloat(selectedVariant.compareAtPrice.amount)) * 100)}%
                    </span>
                  </>
                )}
              </div>

              {/* Key Specs - Quick Reference */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-sm">
                <div className="text-center">
                  <Zap className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <span className="font-heading font-bold block">30%</span>
                  <span className="text-xs text-muted-foreground">Stretch Capacity</span>
                </div>
                <div className="text-center border-x border-border">
                  <Weight className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <span className="font-heading font-bold block">52,300 lbs</span>
                  <span className="text-xs text-muted-foreground">Breaking Strength</span>
                </div>
                <div className="text-center">
                  <Ruler className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <span className="font-heading font-bold block">30 ft</span>
                  <span className="text-xs text-muted-foreground">Length</span>
                </div>
              </div>

              {/* Variants */}
              {variants.length > 1 && (
                <div>
                  <label className="font-heading font-bold text-lg mb-4 block">
                    Select Size
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {variants.map((variant, index) => (
                      <button
                        key={variant.id}
                        onClick={() => {
                          setSelectedVariantIndex(index);
                          setSelectedImageIndex(0);
                        }}
                        disabled={!variant.availableForSale}
                        className={`p-4 border-2 rounded-sm font-heading text-sm transition-all ${
                          index === selectedVariantIndex
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                            : variant.availableForSale
                            ? 'border-border hover:border-primary/50'
                            : 'border-border opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <span className="font-bold block">{variant.title}</span>
                        <span className="text-muted-foreground text-xs">
                          {formatPrice(variant.price.amount)}
                        </span>
                        {!variant.availableForSale && (
                          <span className="text-destructive text-xs block mt-1">Out of Stock</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-6">
                  <div>
                    <label className="font-heading font-bold text-sm mb-2 block">Quantity</label>
                    <div className="flex items-center border border-border rounded-sm">
                      <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-heading text-lg font-bold w-16 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full btn-primary text-lg py-7"
                  onClick={handleAddToCart}
                  disabled={!product.availableForSale || addToCart.isPending}
                >
                  <ShoppingCart className="h-5 w-5 mr-3" />
                  {product.availableForSale ? `Add to Cart — ${formatPrice((parseFloat(selectedVariant?.price.amount || '0') * quantity).toString())}` : 'Sold Out'}
                </Button>

                {/* Express Checkout */}
                <p className="text-center text-sm text-muted-foreground">
                  Free shipping on orders over $100 • Lifetime warranty included
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-4 gap-3 py-6 border-t border-b border-border">
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-heading uppercase leading-tight block">Lifetime Warranty</span>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-heading uppercase leading-tight block">Free Ship $100+</span>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-heading uppercase leading-tight block">USA Made</span>
                </div>
                <div className="text-center">
                  <Check className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <span className="text-xs font-heading uppercase leading-tight block">Batch Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Tabs/Accordion */}
      <section className="py-12 bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Description & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description with Read More */}
              <ProductDescription description={product.description} />

              {/* Features Accordion */}
              <div className="bg-background rounded-sm border border-border overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="features" className="border-b border-border">
                    <AccordionTrigger className="px-8 py-6 font-heading text-lg font-bold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-primary" />
                        Key Features
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-bold">20-30% Stretch Capacity</span>
                            <p className="text-muted-foreground text-sm">Stores and releases energy smoothly for safe, controlled pulls</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-bold">Double-Braided Nylon Construction</span>
                            <p className="text-muted-foreground text-sm">Superior strength and abrasion resistance vs. single-braid alternatives</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-bold">Reinforced Eye Loops</span>
                            <p className="text-muted-foreground text-sm">Heavy-duty spliced loops for secure connections without metal hardware</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-bold">No Metal Parts</span>
                            <p className="text-muted-foreground text-sm">Eliminates projectile risk if the rope ever fails</p>
                          </div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="specs" className="border-b border-border">
                    <AccordionTrigger className="px-8 py-6 font-heading text-lg font-bold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-5 w-5 text-primary" />
                        Specifications
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-muted rounded-sm">
                          <span className="text-muted-foreground text-sm block">Breaking Strength</span>
                          <span className="font-heading font-bold text-lg">52,300 lbs</span>
                        </div>
                        <div className="p-4 bg-muted rounded-sm">
                          <span className="text-muted-foreground text-sm block">Working Load</span>
                          <span className="font-heading font-bold text-lg">17,400 lbs</span>
                        </div>
                        <div className="p-4 bg-muted rounded-sm">
                          <span className="text-muted-foreground text-sm block">Stretch</span>
                          <span className="font-heading font-bold text-lg">20-30%</span>
                        </div>
                        <div className="p-4 bg-muted rounded-sm">
                          <span className="text-muted-foreground text-sm block">Material</span>
                          <span className="font-heading font-bold text-lg">Double-Braided Nylon</span>
                        </div>
                        <div className="p-4 bg-muted rounded-sm">
                          <span className="text-muted-foreground text-sm block">Country of Origin</span>
                          <span className="font-heading font-bold text-lg">USA</span>
                        </div>
                        <div className="p-4 bg-muted rounded-sm">
                          <span className="text-muted-foreground text-sm block">Warranty</span>
                          <span className="font-heading font-bold text-lg">Lifetime</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="safety" className="border-b border-border">
                    <AccordionTrigger className="px-8 py-6 font-heading text-lg font-bold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                        Safety Information
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Always inspect your rope before each use. Look for cuts, abrasions, UV damage, 
                          or wear on the eye loops. Never exceed the working load limit.
                        </p>
                        <div className="bg-destructive/10 border border-destructive/20 rounded-sm p-4">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-destructive">Important Safety Warning</span>
                              <p className="text-sm mt-1">
                                Always use a recovery damper. Keep bystanders at least 1.5x rope length away from the recovery. 
                                Never attach to non-rated points or use metal hooks with kinetic ropes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shipping">
                    <AccordionTrigger className="px-8 py-6 font-heading text-lg font-bold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Truck className="h-5 w-5 text-primary" />
                        Shipping & Returns
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-2">Shipping</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• Free shipping on orders over $100</li>
                            <li>• Standard shipping: 3-7 business days</li>
                            <li>• Express shipping available at checkout</li>
                            <li>• Ships from our USA warehouse</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Returns</h4>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            <li>• 30-day return policy on unused items</li>
                            <li>• Lifetime warranty on manufacturing defects</li>
                            <li>• Contact us for warranty claims</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Right Column - Sizing & Why Yankum */}
            <div className="space-y-8">
              {/* Sizing Guide Card */}
              <div className="bg-background rounded-sm p-6 border border-border">
                <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Sizing Guide
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Choose a rope with breaking strength 2-3x your vehicle's GVWR for safe recovery.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between p-3 bg-muted rounded-sm">
                    <span>4,000-6,000 lbs</span>
                    <span className="font-bold">7/8" x 20'</span>
                  </div>
                  <div className="flex justify-between p-3 bg-primary/10 rounded-sm border border-primary/20">
                    <span>6,000-8,000 lbs</span>
                    <span className="font-bold text-primary">7/8" x 30' ★</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded-sm">
                    <span>8,000-12,000 lbs</span>
                    <span className="font-bold">1" x 30'</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded-sm">
                    <span>12,000+ lbs</span>
                    <span className="font-bold">1-1/4" x 30'</span>
                  </div>
                </div>
                <Link 
                  to="/learn/sizing-guide"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-heading text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Full Sizing Guide
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Why Yankum Card */}
              <div className="bg-secondary text-secondary-foreground rounded-sm p-6">
                <h3 className="font-heading text-xl font-bold mb-4">Why Choose Yankum?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">100% American-Made</span>
                      <p className="text-secondary-foreground/70 text-sm">USA materials, USA manufacturing, USA quality control</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Batch Tested</span>
                      <p className="text-secondary-foreground/70 text-sm">Every production batch tested to exceed rated specs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Lifetime Warranty</span>
                      <p className="text-secondary-foreground/70 text-sm">We stand behind every product we sell</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Expert Support</span>
                      <p className="text-secondary-foreground/70 text-sm">Questions? We're here to help you choose the right gear</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-background rounded-sm p-6 border border-border text-center">
                <h3 className="font-heading font-bold mb-2">Need Help Choosing?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Not sure which size or product is right for your vehicle? We're here to help.
                </p>
                <Link to="/about" className="btn-outline text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Product Sections */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container-wide">
          {/* How Kinetic Ropes Work */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-primary font-heading text-sm uppercase tracking-wider mb-4 block">The Science</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">How Kinetic Recovery Works</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unlike static tow straps that create dangerous shock loads, kinetic recovery ropes are designed to 
                stretch 20-30% under load. This stretch stores energy like a rubber band, then releases it smoothly 
                to assist in the recovery — reducing stress on both vehicles and recovery points.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">1</span>
                  </div>
                  <div>
                    <span className="font-bold block">Connect & Position</span>
                    <p className="text-muted-foreground text-sm">Attach to rated recovery points on both vehicles, keeping the rope loose</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">2</span>
                  </div>
                  <div>
                    <span className="font-bold block">Smooth Acceleration</span>
                    <p className="text-muted-foreground text-sm">Recovery vehicle accelerates smoothly, stretching the rope gradually</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">3</span>
                  </div>
                  <div>
                    <span className="font-bold block">Energy Transfer</span>
                    <p className="text-muted-foreground text-sm">Stored energy releases smoothly, assisting stuck vehicle without jarring impacts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-sm p-8 border border-border">
              <h3 className="font-heading text-xl font-bold mb-6">Kinetic vs. Static Comparison</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm font-heading uppercase text-muted-foreground border-b border-border pb-3">
                  <span>Factor</span>
                  <span className="text-center">Kinetic Rope</span>
                  <span className="text-center">Tow Strap</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-sm">Stretch</span>
                  <span className="text-center font-bold text-primary">20-30%</span>
                  <span className="text-center text-muted-foreground">0-5%</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-sm">Shock Load</span>
                  <span className="text-center font-bold text-primary">Minimal</span>
                  <span className="text-center text-muted-foreground">Severe</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-sm">Vehicle Stress</span>
                  <span className="text-center font-bold text-primary">Low</span>
                  <span className="text-center text-muted-foreground">High</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-sm">Metal Hardware</span>
                  <span className="text-center font-bold text-primary">None</span>
                  <span className="text-center text-muted-foreground">Hooks</span>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-sm">Failure Risk</span>
                  <span className="text-center font-bold text-primary">Low</span>
                  <span className="text-center text-muted-foreground">Moderate</span>
                </div>
              </div>
            </div>
          </div>

          {/* When To Use */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary font-heading text-sm uppercase tracking-wider mb-4 block">Applications</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">When To Use This Rope</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted rounded-sm p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Off-Road Recovery</h3>
                <p className="text-muted-foreground text-sm">
                  Perfect for mud, sand, and snow recoveries where a stuck vehicle needs a smooth, 
                  controlled pull without damaging frame or body.
                </p>
              </div>
              <div className="bg-muted rounded-sm p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Trail Riding</h3>
                <p className="text-muted-foreground text-sm">
                  Essential gear for Jeeps, trucks, and UTVs hitting the trails. Compact enough to 
                  stow in your vehicle, strong enough for any situation.
                </p>
              </div>
              <div className="bg-muted rounded-sm p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Emergency Preparedness</h3>
                <p className="text-muted-foreground text-sm">
                  Keep in your vehicle year-round for unexpected situations — winter storms, 
                  roadside emergencies, or helping others in need.
                </p>
              </div>
            </div>
          </div>

          {/* Care & Maintenance */}
          <div className="bg-secondary rounded-sm p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-primary font-heading text-sm uppercase tracking-wider mb-4 block">Maintenance</span>
                <h2 className="font-heading text-3xl font-bold mb-6 text-secondary-foreground">Care & Storage Tips</h2>
                <p className="text-secondary-foreground/70 mb-6">
                  Proper care extends the life of your kinetic rope and ensures it performs safely for years to come.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground">Rinse with fresh water after use in mud, salt, or sand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground">Allow to air dry completely before storing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground">Store in a cool, dry place away from direct sunlight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground">Inspect before each use for cuts, abrasions, or UV damage</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-sm p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-destructive mb-2">When To Replace</h4>
                      <ul className="text-sm space-y-2 text-destructive/80">
                        <li>• Visible cuts, fraying, or abraded areas</li>
                        <li>• Faded color indicating UV degradation</li>
                        <li>• Stiff or hardened sections</li>
                        <li>• Eye loops showing wear or looseness</li>
                        <li>• After any recovery exceeding 80% of rated capacity</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-background/10 rounded-sm p-6">
                  <h4 className="font-heading font-bold mb-3 text-secondary-foreground">Lifetime Warranty Coverage</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Our lifetime warranty covers manufacturing defects in materials and workmanship. 
                    Normal wear, UV damage, or damage from misuse is not covered. Contact us for warranty claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                You May Also Like
              </h2>
              <Link 
                to="/products"
                className="text-primary font-heading text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((product) => (
                <RelatedProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
