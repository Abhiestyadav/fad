import React from 'react';

interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <div className={`section ${className} animate fade-in`}>
      {children}
    </div>
  );
};

export default Section;