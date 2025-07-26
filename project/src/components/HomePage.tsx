import React from 'react';
import { ArrowRight, Recycle, Lightbulb, Users, Sparkles, Leaf, Globe, UserPlus } from 'lucide-react';

interface HomePageProps {
  onStartIdentifying: () => void;
  onExploreCommunities?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartIdentifying, onExploreCommunities }) => {
  return (
    <div className="min-h-[85vh]">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animated Logo */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <Recycle className="h-32 w-32 text-green-600 mx-auto mb-6 relative z-10 animate-bounce" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform{' '}
            <span className="text-green-600">
              Waste
            </span>{' '}
            into{' '}
            <span className="text-yellow-500">
              Treasure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the hidden potential in your waste materials. Upload, identify, and transform 
            everyday discards into extraordinary creations with AI-powered insights and creative ideas.
          </p>

          {/* Main CTA Button */}
          <button
            onClick={onStartIdentifying}
            className="group relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:from-green-700 hover:via-green-800 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 flex items-center mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
            Start Identifying Waste
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Secondary CTA Button */}
          <button
            onClick={onExploreCommunities}
            className="group mt-6 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:via-green-800 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex items-center mx-auto"
          >
            <Users className="mr-3 h-5 w-5" />
            Explore Communities
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              AI-Powered Recognition
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              1000+ Creative Ideas
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></div>
              Community Driven
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
              Global Impact
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Identification</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload a photo of your waste material and let our advanced AI instantly identify 
                the type and suggest the best repurposing options.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Creative Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized, step-by-step conversion ideas tailored to your specific waste 
                type, from beginner to advanced projects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Join Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with eco-warriors worldwide, share your creations, and discover 
                innovative waste management initiatives in your area.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-green-50 to-green-100 rounded-3xl mx-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-4">
              <Globe className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Making a Global Impact
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of eco-conscious individuals who are transforming waste into wonder, 
            one creative project at a time. Together, we're building a sustainable future.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600">Items Repurposed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">8,500+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">2.3T</div>
              <div className="text-gray-600">Waste Diverted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Transformation Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every piece of waste is an opportunity waiting to be discovered. 
            Let's turn your trash into treasure today!
          </p>
          <button
            onClick={onStartIdentifying}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;