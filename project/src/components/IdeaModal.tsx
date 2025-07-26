import React from 'react';
import { X } from 'lucide-react';
import type { WasteIdea } from '../data/wasteIdeas';

interface IdeaModalProps {
  idea: WasteIdea;
  onClose: () => void;
}

const IdeaModal: React.FC<IdeaModalProps> = ({ idea, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{idea.title}</h2>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {idea.image && (
            <img 
              src={idea.image} 
              alt={idea.title} 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{idea.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Materials Needed</h3>
              <ul className="list-disc list-inside text-gray-600">
                {idea.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Steps</h3>
              <ol className="list-decimal list-inside text-gray-600">
                {idea.steps.map((step, index) => (
                  <li key={index} className="mb-2">{step}</li>
                ))}
              </ol>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>Difficulty: <span className="capitalize">{idea.difficulty}</span></span>
              <span>Time Required: {idea.timeRequired}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaModal;