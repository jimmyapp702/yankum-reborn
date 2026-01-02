import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who is eligible?',
    answer: 'US residents 18+. Employees of Yankum Ropes and immediate family are not eligible.'
  },
  {
    question: 'How do entries work?',
    answer: 'Sign up for 100 free entries. Every $1 spent = 1 entry. Featured products = 20X entries. Refer friends for 50 bonus entries each.'
  },
  {
    question: 'How is the winner selected?',
    answer: 'Random drawing from all eligible entries using a certified random selection process. Drawing conducted live.'
  },
  {
    question: 'What about taxes & delivery?',
    answer: 'Winner covers taxes, title, and registration. We handle shipping to continental US and all documentation.'
  },
];

export function GiveawayRules() {
  return (
    <section className="py-16 bg-background">
      <div className="container-wide">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-heading font-bold text-foreground text-center mb-8">
            FAQ
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted border-0 px-4 rounded-lg"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-sm text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-xs text-muted-foreground mt-8">
            No purchase necessary. Void where prohibited.
          </p>
        </div>
      </div>
    </section>
  );
}
