import React from 'react';
import { Accordion, AccordionHeader, AccordionItem } from 'reactstrap';

const Acorddian = () => {
    return (
        <div>
  <Accordion
    open="1"
    toggle={function noRefCheck(){}}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionItem accordionId="1">
        <strong>
          This is the first item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="2">
        Accordion Item 2
      </AccordionHeader>
      <AccordionItem accordionId="2">
        <strong>
          This is the second item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="3">
        Accordion Item 3
      </AccordionHeader>
      <AccordionItem accordionId="3">
        <strong>
          This is the third item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionItem>
    </AccordionItem>
  </Accordion>
        </div>
    );
};

export default Acorddian;