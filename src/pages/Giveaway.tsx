import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { GiveawayHero } from '@/components/giveaway/GiveawayHero';
import { CountdownTimer } from '@/components/giveaway/CountdownTimer';
import { PrizeShowcase } from '@/components/giveaway/PrizeShowcase';
import { HowToEnter } from '@/components/giveaway/HowToEnter';
import { GiveawayTestimonials } from '@/components/giveaway/GiveawayTestimonials';
import { GiveawayEntryForm } from '@/components/giveaway/GiveawayEntryForm';
import { GiveawayRules } from '@/components/giveaway/GiveawayRules';

export default function Giveaway() {
  return (
    <>
      <Helmet>
        <title>Win the Ultimate Recovery Kit - Yankum Ropes Giveaway</title>
        <meta 
          name="description" 
          content="Enter to win over $2,500 in premium recovery gear from Yankum Ropes! Get 100 FREE entries when you sign up. Includes kinetic ropes, soft shackles, and more." 
        />
        <meta property="og:title" content="Win the Ultimate Recovery Kit - Yankum Ropes Giveaway" />
        <meta property="og:description" content="Enter to win over $2,500 in premium recovery gear! Get 100 FREE entries when you sign up." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yankum.com/giveaway" />
      </Helmet>

      <Layout>
        <GiveawayHero />
        <CountdownTimer />
        <PrizeShowcase />
        <HowToEnter />
        <GiveawayTestimonials />
        <GiveawayEntryForm />
        <GiveawayRules />
      </Layout>
    </>
  );
}