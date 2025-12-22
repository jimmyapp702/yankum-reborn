import { Layout } from '@/components/layout/Layout';
import { SafetyEducationHero } from '@/components/home/SafetyEducationHero';
import { KineticRopeScienceSection } from '@/components/home/KineticRopeScienceSection';
import { SafetyGuidelinesSection } from '@/components/home/SafetyGuidelinesSection';
import { ProductEducationSection } from '@/components/home/ProductEducationSection';
import { SizingGuideSection } from '@/components/home/SizingGuideSection';
import { CompactFeaturedProducts } from '@/components/home/CompactFeaturedProducts';
import { USAManufacturingSection } from '@/components/home/USAManufacturingSection';
import { CompactCollections } from '@/components/home/CompactCollections';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      {/* Safety-First Educational Hero */}
      <SafetyEducationHero />
      
      {/* Education: How Kinetic Ropes Work */}
      <KineticRopeScienceSection />
      
      {/* Education: Safety Do's and Don'ts */}
      <SafetyGuidelinesSection />
      
      {/* Education: Product Types Explained */}
      <ProductEducationSection />
      
      {/* Education: Sizing Guide */}
      <SizingGuideSection />
      
      {/* Shop: Featured Products */}
      <CompactFeaturedProducts />
      
      {/* Brand: USA Manufacturing */}
      <USAManufacturingSection />
      
      {/* Shop: Collections */}
      <CompactCollections />
      
      {/* Social Proof */}
      <TestimonialsSection />
      
      {/* Email Capture */}
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
