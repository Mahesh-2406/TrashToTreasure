import React, { useState } from 'react';
import { Filter, Lightbulb } from 'lucide-react';
import { wasteIdeas, WasteIdea } from '../data/wasteIdeas';
import IdeaCard from './IdeaCard';
import IdeaModal from './IdeaModal';

interface ConversionIdeasProps {
  initialFilterType?: string | null;
}

const ConversionIdeas: React.FC<ConversionIdeasProps> = ({ initialFilterType }) => {
  const [selectedType, setSelectedType] = useState<string>(
    initialFilterType && wasteIdeas.some(idea => idea.type === initialFilterType) 
      ? initialFilterType 
      : 'all'
  );
  const [selectedIdea, setSelectedIdea] = useState<WasteIdea | null>(null);

  const filteredIdeas =
    selectedType === 'all'
      ? wasteIdeas
      : wasteIdeas.filter((idea) => idea.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Lightbulb className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Creative Conversion Ideas</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {initialFilterType 
            ? `Discover amazing ways to transform your ${initialFilterType} waste into useful items!`
            : 'Explore creative ways to repurpose different types of waste materials.'
          }
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedType === 'all' ? 'All Ideas' : `${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Ideas`}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({filteredIdeas.length} {filteredIdeas.length === 1 ? 'idea' : 'ideas'})
            </span>
          </h2>
          <div className="flex items-center space-x-3">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border-2 border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            >
              <option value="all">All Types</option>
              <option value="paper">Paper</option>
              <option value="plastic">Plastic</option>
              <option value="textile">Textile</option>
              <option value="glass">Glass</option>
              <option value="metal">Metal</option>
              <option value="cardboard">Cardboard</option>
              <option value="organic">Organic</option>
            </select>
          </div>
        </div>

        {filteredIdeas.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onClick={() => setSelectedIdea(idea)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Ideas Found</h3>
            <p className="text-gray-600 mb-4">
              We don't have conversion ideas for this waste type yet.
            </p>
            <button
              onClick={() => setSelectedType('all')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              View All Ideas
            </button>
          </div>
        )}
      </div>

      {selectedIdea && (
        <IdeaModal idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
      )}
    </div>
  );
};

export default ConversionIdeas;
