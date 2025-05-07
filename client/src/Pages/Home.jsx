import React from 'react'

import HeroSection from '../components/HeroSection';
import FilterSection from '../components/FilterSection';
 import TopInfluencers from '../components/TopInfluencers';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
   
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="container mx-auto px-4 py-8">
          <FilterSection />
         
          <TopInfluencers />
        
         
        </div>
      </main>
      
    
    </div>
  )
}

export default Home