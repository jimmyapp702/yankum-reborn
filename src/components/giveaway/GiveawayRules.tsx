import { Calendar, MapPin, FileText, AlertCircle } from 'lucide-react';
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
    <section className="py-24 md:py-32 bg-yankum-charcoal relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yankum-steel/30 to-transparent" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header info */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            <div className="flex items-center gap-4 bg-yankum-black border border-yankum-steel/20 p-5">
              <div className="w-12 h-12 bg-yankum-charcoal border border-yankum-steel/30 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-yankum-steel uppercase tracking-wider mb-1">Period</p>
                <p className="font-heading font-bold text-primary-foreground text-sm">Jan 1 - Jan 31, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-yankum-black border border-yankum-steel/20 p-5">
              <div className="w-12 h-12 bg-yankum-charcoal border border-yankum-steel/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-yankum-steel uppercase tracking-wider mb-1">Eligibility</p>
                <p className="font-heading font-bold text-primary-foreground text-sm">US Residents 18+</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-yankum-black border border-yankum-steel/20 p-5">
              <div className="w-12 h-12 bg-yankum-charcoal border border-yankum-steel/30 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-yankum-steel uppercase tracking-wider mb-1">Odds</p>
                <p className="font-heading font-bold text-primary-foreground text-sm">Based on Entries</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight">
              OFFICIAL RULES & FAQ
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {rules.map((rule, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-yankum-black border border-yankum-steel/20 px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-primary-foreground hover:no-underline py-5 text-base">
                  {rule.question}
                </AccordionTrigger>
                <AccordionContent className="text-yankum-steel pb-5 leading-relaxed">
                  {rule.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Legal disclaimer */}
          <div className="mt-16 bg-yankum-black border border-yankum-steel/20 p-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-yankum-charcoal border border-yankum-steel/30 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-yankum-steel" />
              </div>
              <div className="text-sm text-yankum-steel leading-relaxed">
                <p className="font-heading font-semibold text-primary-foreground mb-3 uppercase tracking-wider text-xs">
                  Legal Disclaimer
                </p>
                <p className="mb-4">
                  NO PURCHASE NECESSARY TO ENTER OR WIN. A purchase will not improve your chances of winning. 
                  Void where prohibited by law. This promotion is in no way sponsored, endorsed, administered by, 
                  or associated with Facebook, Instagram, or any other social media platform.
                </p>
                <p>
                  For complete official rules, contact{' '}
                  <a href="mailto:giveaway@yankum.com" className="text-primary hover:underline">
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
