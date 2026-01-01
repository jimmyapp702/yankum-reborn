import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who is eligible to enter?',
    answer: 'US residents who are 18 years of age or older. Employees of Yankum Ropes LLC and their immediate family members are not eligible.'
  },
  {
    question: 'How do entries work?',
    answer: 'Sign up to receive 100 free entries. Every $1 you spend on our store equals 1 entry. Featured products earn 20X entries. Refer friends to earn 50 bonus entries per signup.'
  },
  {
    question: 'How is the winner selected?',
    answer: 'The winner will be selected through a random drawing from all eligible entries using a certified random selection process. The drawing will be conducted live and recorded.'
  },
  {
    question: 'What happens after I win?',
    answer: 'The winner is responsible for applicable taxes, title, and registration fees. We provide all necessary documentation and cover shipping costs within the continental United States.'
  },
];

export function GiveawayRules() {
  return (
    <section className="py-20 bg-muted">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-0 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10 text-sm text-muted-foreground">
            <p>
              No purchase necessary. Void where prohibited.{' '}
              <a href="#" className="text-primary hover:underline">
                See official rules
              </a>
              {' '}or{' '}
              <a href="mailto:giveaway@yankum.com" className="text-primary hover:underline">
                contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
