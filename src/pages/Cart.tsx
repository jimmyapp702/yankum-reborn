import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useCart, useUpdateCartLine, useRemoveFromCart } from '@/hooks/useShopify';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

function formatPrice(amount: string, currencyCode: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export default function Cart() {
  const { data, isLoading } = useCart();
  const updateCartLine = useUpdateCartLine();
  const removeFromCart = useRemoveFromCart();

  const cart = data?.cart;
  const lineItems = cart?.lines.edges.map(e => e.node) || [];

  const handleUpdateQuantity = async (lineId: string, quantity: number) => {
    if (quantity < 1) {
      await removeFromCart.mutateAsync(lineId);
    } else {
      await updateCartLine.mutateAsync({ lineId, quantity });
    }
  };

  const handleRemove = async (lineId: string) => {
    await removeFromCart.mutateAsync(lineId);
  };

  if (isLoading) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <Skeleton className="h-12 w-48 mb-8" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!cart || lineItems.length === 0) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-wide max-w-4xl text-center">
            <ShoppingCart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any recovery gear yet.
            </p>
            <Link to="/products" className="btn-primary inline-flex">
              Shop Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Your Cart ({lineItems.length} {lineItems.length === 1 ? 'item' : 'items'})
          </h1>

          <div className="space-y-6 mb-8">
            {lineItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border border-border rounded-sm">
                <div className="w-24 h-24 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                  {item.merchandise.product.featuredImage ? (
                    <img
                      src={item.merchandise.product.featuredImage.url}
                      alt={item.merchandise.product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                      No image
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <Link 
                    to={`/products/${item.merchandise.product.handle}`}
                    className="font-heading font-bold hover:text-primary transition-colors"
                  >
                    {item.merchandise.product.title}
                  </Link>
                  {item.merchandise.title !== 'Default Title' && (
                    <p className="text-sm text-muted-foreground">{item.merchandise.title}</p>
                  )}
                  <p className="font-heading font-bold mt-2">
                    {formatPrice(item.merchandise.price.amount, item.merchandise.price.currencyCode)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                    disabled={removeFromCart.isPending}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors"
                      disabled={updateCartLine.isPending || removeFromCart.isPending}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-heading font-bold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors"
                      disabled={updateCartLine.isPending}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="border-t border-border pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-heading text-xl font-bold">
                {formatPrice(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <a
              href={cart.checkoutUrl}
              className="btn-primary w-full text-center text-lg py-4"
            >
              Proceed to Checkout
            </a>
            <Link
              to="/products"
              className="block text-center mt-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
