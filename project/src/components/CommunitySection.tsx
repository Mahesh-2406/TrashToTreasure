import React, { useState } from 'react';
import { MapPin, Users, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Community {
  id: string | number;
  name: string;
  location: string;
  members: number;
  description: string;
  image: string;
  contact_email?: string;
  website?: string;
  join_url?: string;
  created_at?: string;
}

interface CommunitySectionProps {
  onCreateCommunity?: () => void;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ onCreateCommunity }) => {
  const [staticCommunities] = useState<Community[]>([
    {
      id: 'static-1',
      name: 'B.pac',
      location: 'Bengaluru',
      members: 2500,
      description:
        'Bangalore Political Action Committee (B.PAC) is a non-partisan citizen’s group that aims to improve governance in Bengaluru and to enhance the quality of life of every Bengalurean.',
      image:
        'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      join_url: 'https://bpac.in/navigating-solid-waste-challenge-in-bengaluru/',
    },
    {
      id: 'static-2',
      name: 'Swacha Graha',
      location: 'Bengaluru',
      members: 1800,
      description:
        'Solid Waste Management Round Table, Bengaluru (SWMRT)  is a collective of SWM  practitioners   working for the adoption of sustainable waste management practices by citizens and municipalities, since 2009, for improving public health, safe food, inclusive livelihoods, clean air and water.',
      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      join_url: 'https://www.swachagraha.in/about',
    },
  ]);
  const [userCommunities, setUserCommunities] = useState<Community[]>([]);
  const [allCommunities, setAllCommunities] = useState<Community[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('communities')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching communities:', error);
      } else if (data) {
        const fetchedCommunities = data.map(community => ({
          ...community,
          members: community.members || 1
        }));
        setUserCommunities(fetchedCommunities);
      }
    } catch (error) {
      console.error('Error fetching communities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    // Combine static communities with user-created communities
    setAllCommunities([...staticCommunities, ...userCommunities]);
  }, [staticCommunities, userCommunities]);

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Community Initiatives</h2>
        <button
          onClick={onCreateCommunity}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Create Community</span>
        </button>
      </div>

      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-2">Loading communities...</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {allCommunities.map((community) => (
          <div
            key={community.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={community.image}
              alt={community.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{community.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm">{community.members} members</span>
              </div>
              <p className="text-gray-600 mb-4">{community.description}</p>
              {community.join_url ? (
                <a
                  href={community.join_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center transition-colors"
                >
                  Join Community
                </a>
              ) : (
                <button className="w-full bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed">
                  Join Community (Coming Soon)
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {userCommunities.length === 0 && !isLoading && (
        <div className="text-center py-8 text-gray-500">
          <p>No user-created communities yet. Be the first to create one!</p>
        </div>
      )}

      <div className="mt-8 p-6 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Start Your Own Initiative
        </h3>
        <p className="text-gray-600 mb-4">
          Have an idea for improving waste management in your community? 
          {!userCommunities.some(c => c.created_at) ? ' Sign up and start your own initiative!' : ' Start your own initiative and connect with like-minded individuals!'}
        </p>
        <button 
          onClick={onCreateCommunity}
          className="bg-white text-green-600 px-4 py-2 rounded-md border border-green-600 hover:bg-green-50 transition-colors"
        >
          {userCommunities.some(c => c.created_at) ? 'Create Another Community' : 'Create Community'}
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;
