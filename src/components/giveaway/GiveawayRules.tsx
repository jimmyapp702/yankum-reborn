import { FileText, Calendar, MapPin, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const rules = [
  {
    question: 'Who is eligible to enter?',
    answer: 'The giveaway is open to legal residents of the United States who are 18 years of age or older at the time of entry. Employees of Yankum Ropes LLC and their immediate family members are not eligible.'
  },
  {
    question: 'How do I enter?',
    answer: 'Enter by providing your email address through our official giveaway entry form. You can earn additional entries by sharing your unique referral link, making purchases, or following us on social media.'
  },
  {
    question: 'How are winners selected?',
    answer: 'Winners are selected through a random drawing from all eligible entries received during the giveaway period. The drawing is conducted using a certified random selection process.'
  },
  {
    question: 'When will the winner be announced?',
    answer: 'The winner will be announced within 7 days of the giveaway end date via email and on our social media channels. Winners will be contacted directly via the email address provided during entry.'
  },
  {
    question: 'Can I enter multiple times?',
    answer: 'Each person may only submit one email entry. However, you can earn additional entries through referrals (50 entries per successful referral), purchases (20 entries per $1 spent), and social media engagement.'
  },
  {
    question: 'What if I win?',
    answer: 'Winners will be notified via email and must respond within 72 hours to claim their prize. Prizes will be shipped to the winner free of charge within the continental United States.'
  }
];

export function GiveawayRules() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Header info */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Giveaway Period</p>
                <p className="font-semibold text-foreground">Jan 1 - Jan 31, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Eligibility</p>
                <p className="font-semibold text-foreground">US Residents 18+</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <FileText className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Odds of Winning</p>
                <p className="font-semibold text-foreground">Based on Entries</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              OFFICIAL RULES & FAQ
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {rules.map((rule, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-4">
                  {rule.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {rule.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Legal disclaimer */}
          <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Legal Disclaimer</p>
                <p>
                  NO PURCHASE NECESSARY TO ENTER OR WIN. A purchase will not improve your chances of winning. 
                  Void where prohibited by law. This promotion is in no way sponsored, endorsed, administered by, 
                  or associated with Facebook, Instagram, or any other social media platform. By entering, 
                  participants agree to release and hold harmless Yankum Ropes LLC and its affiliates from 
                  any liability arising from participation in this giveaway.
                </p>
                <p className="mt-4">
                  For complete official rules, please contact us at{' '}
                  <a href="mailto:giveaway@yankum.com" className="text-primary underline">
                    giveaway@yankum.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}