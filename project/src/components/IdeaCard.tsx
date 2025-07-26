import React from 'react';
import { ChevronRight, Clock, Wrench } from 'lucide-react';
import type { WasteIdea } from '../data/wasteIdeas';

interface IdeaCardProps {
  idea: WasteIdea;
  onClick: () => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {idea.image && (
        <img 
          src={idea.image} 
          alt={idea.title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{idea.title}</h3>
        <p className="text-gray-600 mb-4">{idea.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{idea.timeRequired}</span>
          </div>
          <div className="flex items-center">
            <Wrench className="h-4 w-4 mr-1" />
            <span className="capitalize">{idea.difficulty}</span>
          </div>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;