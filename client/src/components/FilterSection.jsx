import React, { useState } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNiche, setSelectedNiche] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRange, setSelectedRange] = useState('');
  
  const niches = ['Fashion', 'Beauty', 'Travel', 'Food', 'Fitness', 'Technology', 'Gaming', 'Lifestyle'];
  const cities = ['New York', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco', 'London', 'Tokyo', 'Paris'];
  const followerRanges = ['1K - 10K', '10K - 50K', '50K - 100K', '100K - 500K', '500K - 1M', '1M+'];
  
  const handleClearFilters = () => {
    setSelectedNiche('');
    setSelectedCity('');
    setSelectedRange('');
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-influencer-black font-medium flex items-center gap-2">
          <Filter className="h-4 w-4 text-orange-500" /> Filters
        </h3>
        
        <div className="flex items-center gap-4">
          {(selectedNiche || selectedCity || selectedRange) && (
            <button 
              onClick={handleClearFilters}
              className="flex items-center text-sm text-gray-500 hover:text-influencer-orange gap-1 transition-colors"
            >
              <X className="h-4 w-4" /> Clear
            </button>
          )}
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex items-center text-sm text-gray-600 hover:text-influencer-orange gap-1 transition-colors"
          >
            {isOpen ? 'Hide Filters' : 'Show Filters'}
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Niche</label>
            <select 
              className="w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-influencer-orange focus:border-transparent transition-all"
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
            >
              <option value="">All Niches</option>
              {niches.map((niche) => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <select 
              className="w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-influencer-orange focus:border-transparent transition-all"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Followers</label>
            <select 
              className="w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-influencer-orange focus:border-transparent transition-all"
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
            >
              <option value="">Any Number of Followers</option>
              {followerRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
