import React from 'react';


interface WaterContentProps {
  paragraph: Paragraph;
}

export const WaterContent: React.FC<WaterContentProps> = ({ paragraph }) => {
  return (  
    <div className="water-paragraph mb-8">
      <h2 className="text-2xl font-bold mb-4">{paragraph.title}</h2>
      
      <div className="space-y-4">
        {paragraph.content.map((item, index) => {
          if (item.type === 'text') {
            return (
              <p key={`text-${index}`} className="text-justify">
                {item.content}
              </p>
            );
          } else if (item.type === 'li') {
            return (
              <ul key={`list-${index}`} className="list-disc pl-6 space-y-2">
                {item.items.map((listItem, itemIndex) => (
                  <li key={`item-${index}-${itemIndex}`}>{listItem}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WaterContent;