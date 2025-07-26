import React, { useState, useEffect } from 'react';
import { Recycle } from 'lucide-react';
import { supabase } from './lib/supabase';
import type { User } from '@supabase/supabase-js';
import HomePage from './components/HomePage';
import WasteIdentification from './components/WasteIdentification';
import ConversionIdeas from './components/ConversionIdeas';
import CommunitySection from './components/CommunitySection';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import CreateCommunityPage from './components/CreateCommunityPage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [identifiedWasteType, setIdentifiedWasteType] = useState<string | null>(null);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  const backgroundImages = [
    'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Recycling bins
    'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Waste sorting
    'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Plastic bottles recycling
    'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Green recycling concept
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleStartIdentifying = () => {
    setCurrentPage('identify');
  };

  const handleIdentifySuccess = () => {
    setCurrentPage('ideas');
  };

  const handleExploreCommunities = () => {
    setCurrentPage('community');
  };

  const handleCreateCommunity = () => {
    if (!user) {
      // Redirect to signup if user is not authenticated
      setCurrentPage('signup');
    } else {
      setCurrentPage('createCommunity');
    }
  };

  const handleCommunityCreated = () => {
    setCurrentPage('community');
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    const handleSignUpSuccess = () => {
      setCurrentPage('home');
    };

    const handleSignInSuccess = () => {
      setCurrentPage('home');
    };

    switch (currentPage) {
      case 'home':
        return <HomePage onStartIdentifying={handleStartIdentifying} onExploreCommunities={handleExploreCommunities} />;
      case 'identify':
        return (
          <WasteIdentification
            onIdentifySuccess={handleIdentifySuccess}
            onSetIdentifiedWasteType={setIdentifiedWasteType}
          />
        );
      case 'ideas':
        return <ConversionIdeas initialFilterType={identifiedWasteType} />;
      case 'community':
        return <CommunitySection onCreateCommunity={handleCreateCommunity} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'signup':
        return <SignUpPage onSignUpSuccess={handleSignUpSuccess} />;
      case 'signin':
        return <SignInPage onSignInSuccess={handleSignInSuccess} />;
      case 'createCommunity':
        return <CreateCommunityPage onCommunityCreated={handleCommunityCreated} />;
      default:
        return <HomePage onStartIdentifying={handleStartIdentifying} onExploreCommunities={handleExploreCommunities} />;
    }
  };

  const currentBackgroundImage = backgroundImages[currentBackgroundIndex];

  return (
    <div
      className="min-h-screen transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${currentBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Header */}
      <header className="bg-gray-900 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Clickable to go home */}
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-white">
                Trash2Treasure
              </span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentPage('about')}
                className={`text-gray-300 hover:text-green-500 transition-colors ${
                  currentPage === 'about' ? 'text-green-500 font-semibold' : ''
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('community')}
                className={`text-gray-300 hover:text-green-500 transition-colors ${
                  currentPage === 'community' ? 'text-green-500 font-semibold' : ''
                }`}
              >
                Communities
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`text-gray-300 hover:text-green-500 transition-colors ${
                  currentPage === 'contact' ? 'text-green-500 font-semibold' : ''
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setCurrentPage('faq')}
                className={`text-gray-300 hover:text-green-500 transition-colors ${
                  currentPage === 'faq' ? 'text-green-500 font-semibold' : ''
                }`}
              >
                FAQ
              </button>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300">Welcome, {user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 font-semibold"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage('signin')}
                    className={`text-gray-300 hover:text-green-500 transition-colors font-semibold ${
                      currentPage === 'signin' ? 'text-green-500' : ''
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setCurrentPage('signup')}
                    className={`bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold ${
                      currentPage === 'signup' ? 'from-green-700 to-green-800' : ''
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-green-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              © 2025 Trash2Treasure. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => setCurrentPage('about')}
                className="text-sm text-gray-400 hover:text-green-500"
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('community')}
                className="text-sm text-gray-400 hover:text-green-500"
              >
                Communities
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-sm text-gray-400 hover:text-green-500"
              >
                Contact
              </button>
              <button
                onClick={() => setCurrentPage('faq')}
                className="text-sm text-gray-400 hover:text-green-500"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;