import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Trash2Treasure</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Trash2Treasure is an innovative platform dedicated to transforming the way we think about waste. 
          Our mission is to empower individuals and communities to see potential in discarded materials and 
          turn them into valuable, creative, and functional items.
        </p>

        <div className="grid md:grid-cols-3 gap-8 my-12">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To reduce waste and promote sustainability through creative repurposing and community engagement.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Sustainability, creativity, community collaboration, and environmental responsibility.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
            <p className="text-gray-600">
              Creating a global movement towards zero waste and circular economy principles.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6">
          <li>Upload an image of your waste material</li>
          <li>Our AI identifies the waste type automatically</li>
          <li>Browse personalized conversion ideas</li>
          <li>Follow step-by-step instructions to create something new</li>
          <li>Share your creations with the community</li>
        </ol>

        <p className="text-gray-600">
          Join thousands of eco-conscious individuals who are making a difference, one creative project at a time. 
          Together, we can build a more sustainable future where nothing goes to waste.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;