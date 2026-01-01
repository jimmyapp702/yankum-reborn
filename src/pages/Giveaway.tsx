import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { GiveawayHero } from '@/components/giveaway/GiveawayHero';
import { CountdownTimer } from '@/components/giveaway/CountdownTimer';
import { PrizeShowcase } from '@/components/giveaway/PrizeShowcase';
import { FeaturedMultiplierCollection } from '@/components/giveaway/FeaturedMultiplierCollection';
import { HowToEnter } from '@/components/giveaway/HowToEnter';
import { GiveawayTestimonials } from '@/components/giveaway/GiveawayTestimonials';
import { GiveawayEntryForm } from '@/components/giveaway/GiveawayEntryForm';
import { GiveawayRules } from '@/components/giveaway/GiveawayRules';

export default function Giveaway() {
  return (
    <>
      <Helmet>
        <title>Win a $75,000+ Off-Road Rig - Yankum Ropes Giveaway</title>
        <meta 
          name="description" 
          content="Enter to win a fully-built, trail-ready off-road vehicle worth over $75,000! Get 100 FREE entries when you sign up. No purchase necessary." 
        />
        <meta property="og:title" content="Win a $75,000+ Off-Road Rig - Yankum Ropes Giveaway" />
        <meta property="og:description" content="Enter to win a fully-built off-road rig! Get 100 FREE entries when you sign up." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yankum.com/giveaway" />
      </Helmet>

      <Layout>
        <GiveawayHero />
        <CountdownTimer />
        <PrizeShowcase />
        <FeaturedMultiplierCollection />
        <HowToEnter />
        <GiveawayTestimonials />
        <GiveawayEntryForm />
        <GiveawayRules />
      </Layout>
    </>
  );
}
