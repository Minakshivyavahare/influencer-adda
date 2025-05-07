import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden bg-white shadow-lg transition-shadow focus-within:shadow-xl">
        <div className="px-4 py-3">
          <Search className="h-5 w-5 text-influencer-orange" />
        </div>
        <input
          type="text"
          placeholder="Search for influencers by name, niche, or location..."
          className="flex-1 py-3 px-2 outline-none text-sm md:text-base"
        />
        <button className="bg-orange-500 hover:from-amber-500 hover:to-influencer-orange text-white px-6 py-3 font-medium transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
