import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyYankumSection } from '@/components/home/WhyYankumSection';
import { CollectionsSection } from '@/components/home/CollectionsSection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { EducationSection } from '@/components/home/EducationSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyYankumSection />
      <CollectionsSection />
      <FeaturedProductsSection />
      <EducationSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
