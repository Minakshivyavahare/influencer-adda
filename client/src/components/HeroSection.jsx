import React from 'react';
import SearchBar from './SearchBar';
import { TrendingUp, Award, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-white pb-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-influencer-orange opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-amber-500 opacity-5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
          Find Your Perfect <span className="text-orange-500">Influencer</span> Match
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mb-10 text-lg">
          Connect with top social media influencers across all niches and platforms. 
          Discover creators who align with your brand and reach your target audience.
        </p>
        
        <SearchBar />
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-amber-50 p-3 mb-3">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div className="font-bold text-3xl md:text-4xl text-orange-500">10K+</div>
              <p className="text-sm text-gray-500 mt-1">Verified Influencers</p>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-amber-50 p-3 mb-3">
                <Award className="h-6 w-6 text-orange-500" />
              </div>
              <div className="font-bold text-3xl md:text-4xl text-orange-500">50+</div>
              <p className="text-sm text-gray-500 mt-1">Niche Categories</p>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-amber-50 p-3 mb-3">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <div className="font-bold text-3xl md:text-4xl text-orange-500">150+</div>
              <p className="text-sm text-gray-500 mt-1">Cities Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
