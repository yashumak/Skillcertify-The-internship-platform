import React from "react";

export const Accordion = ({ children }) => (
  <div className="accordion">{children}</div>
);

export const AccordionItem = ({ children }) => (
  <div className="accordion-item">{children}</div>
);

export const AccordionTrigger = ({ children, onClick }) => (
  <button className="accordion-trigger" onClick={onClick}>
    {children}
  </button>
);

export const AccordionContent = ({ children }) => (
  <div className="accordion-content">{children}</div>
);


