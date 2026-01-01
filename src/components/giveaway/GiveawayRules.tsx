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
    question: 'What happens with taxes and registration?',
    answer: 'The winner is responsible for all applicable taxes, title, and registration fees. We will provide documentation and assistance to help you through the process. We cover shipping anywhere in the continental US.'
  },
  {
    question: 'What if I win?',
    answer: 'Winners will be notified via email and must respond within 72 hours to claim their prize. The vehicle will be delivered to the winner free of charge within the continental United States.'
  }
];

export function GiveawayRules() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            <div className="flex items-center gap-4 p-5 bg-muted">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Period</p>
                <p className="font-heading font-bold text-foreground">Jan 1 - 31, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-muted">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Eligibility</p>
                <p className="font-heading font-bold text-foreground">US Residents 18+</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-muted">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Odds</p>
                <p className="font-heading font-bold text-foreground">Based on Entries</p>
              </div>
            </div>
          </div>

          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
              RULES & FAQ
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {rules.map((rule, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted border-0 px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {rule.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {rule.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-muted border-l-4 border-primary">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-heading font-semibold text-foreground mb-2">Legal Disclaimer</p>
                <p className="leading-relaxed">
                  NO PURCHASE NECESSARY TO ENTER OR WIN. A purchase will not improve your chances of winning. 
                  Void where prohibited by law. By entering, participants agree to release and hold harmless 
                  Yankum Ropes LLC from any liability arising from participation in this giveaway.
                </p>
                <p className="mt-3">
                  Questions? Contact{' '}
                  <a href="mailto:giveaway@yankum.com" className="text-primary hover:underline font-medium">
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
