import React, { useState, useEffect, ReactNode } from 'react';

interface AccordionToggleProps {
  initialShowCount: number;
  children: ReactNode;
  buttonTextAccordion?: string;
  buttonTextAccordionActive?: string;
}

const AccordionToggle: React.FC<AccordionToggleProps> = ({
  initialShowCount,
  children,
  buttonTextAccordion = '',
  buttonTextAccordionActive = '',
}) => {
  const [showMore, setShowMore] = useState(false);
  const toggle = () => setShowMore(!showMore);

  useEffect(() => {
    setShowMore(React.Children.count(children) <= initialShowCount);
  }, [children, initialShowCount]);

  const visibleChildren = React.Children.toArray(children).slice(
    0,
    showMore ? React.Children.count(children) : initialShowCount,
  );

  return (
    <div className="accordion-toggle">
      {visibleChildren}
      {React.Children.count(children) > initialShowCount && (
        <button
          className={`accordion-toggle-button ${showMore ? 'active' : ''}`}
          onClick={toggle}
        >
          {showMore ? buttonTextAccordionActive : buttonTextAccordion}
        </button>
      )}
    </div>
  );
};

export default AccordionToggle;
