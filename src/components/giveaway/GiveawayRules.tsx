import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const rules = [
  {
    question: 'Who is eligible?',
    answer: 'US residents 18+ years old. Employees of Yankum Ropes LLC and immediate family are not eligible.'
  },
  {
    question: 'How do entries work?',
    answer: 'Sign up for 100 free entries. Every $1 spent = 1 entry. Featured products earn 20X entries. Refer friends for 50 bonus entries each.'
  },
  {
    question: 'How is the winner selected?',
    answer: 'Random drawing from all eligible entries using a certified random selection process.'
  },
  {
    question: 'What about taxes?',
    answer: 'Winner is responsible for taxes, title, and registration fees. We provide documentation and cover shipping in the continental US.'
  },
];

export function GiveawayRules() {
  return (
    <section className="py-20 bg-background">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
            FAQ
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {rules.map((rule, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted border-0 px-6"
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

          <p className="text-center text-sm text-muted-foreground mt-8">
            No purchase necessary. Void where prohibited.{' '}
            <a href="mailto:giveaway@yankum.com" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
