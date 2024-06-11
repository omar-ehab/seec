import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {
  title: string;
  content: string;
};
export default function FAQAccordion({ title, content }: Props) {
  return (
    <Accordion type='single' collapsible className={'border-b-0'}>
      <AccordionItem
        value='item-1'
        className={
          'rounded-3xl border border-[#D7D7D7] p-6 hover:border-white hover:bg-[#73AE28]/15'
        }
      >
        <AccordionTrigger className={'p-0 text-black'}>
          {title}
        </AccordionTrigger>
        <AccordionContent className={'mt-4 p-0 text-sub_p'}>
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
