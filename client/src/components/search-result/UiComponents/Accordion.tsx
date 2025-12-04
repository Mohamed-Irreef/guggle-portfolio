import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <span className="accordion-title">{title}</span>
        <span className={`accordion-icon ${isActive ? 'rotate' : ''}`}>
          <i className="ri-arrow-down-s-line"></i>
        </span>
      </button>

      {isActive && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

interface AccordionItemData {
  title: string;
  content: string;
}

interface AccordionProps {
  accordianItems: AccordionItemData[];
}

const Accordion: React.FC<AccordionProps> = ({ accordianItems }) => {
  // Instead of one index, we now store an array of open ones
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (activeIndexes.includes(index)) {
      // If already open → close it
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      // If not open → add it to open list
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  // const items = [
  //   {
  //     title: "What are your hobbies?",
  //     content:
  //       "I enjoy reading fiction stories and philosophy. When I'm not reading for leisure, I spend my free time writing about random stuff. I also like listening to music, especially hip hop, R&B, and drill. My favorite artists are Juice WRLD, Lil Tecca, JayDaYoungan, Yungeen Ace, SL, Meekz Manny and Fredo.",
  //   },
  //   {
  //     title: "Are you open for work?",
  //     content:
  //       "Yes. I am always open to working on innovative projects with creative teams.",
  //   },
  //   {
  //     title: "What's the fastest way to reach you?",
  //     content:
  //       "You can reach me quickly through LinkedIn or by email. I usually respond within 24 hours.",
  //   },
  //   {
  //     title: "What motivates you?",
  //     content:
  //       "The desire to build impactful solutions, learn new things daily, and help others grow motivates me.",
  //   },
  // ];

  return (
    <div className="accordion-container">
      <h3 className="accordion-heading">People also ask</h3>
      {accordianItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndexes.includes(index)}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
