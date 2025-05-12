import React, { useEffect } from 'react';
import { Instagram, Twitter, Star, ArrowRight } from 'lucide-react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getInfluencersForAdmin } from '../Features/admin/adminSlice';
import { Link } from 'react-router-dom';


const InfluencerCard = ({ influencer }) => {

  
  return (
 
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg group">
      <div className={`relative ${influencer.bgColor} h-32`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
        <img 
          src={influencer?.profilePic} 
          alt={influencer.name} 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-24 h-24 rounded-full border-4 border-white object-cover shadow-md group-hover:scale-105 transition-transform"
        />
      </div>
      
      <div className="mt-16 p-6 text-center">
        <div className="flex items-center justify-center gap-1.5">
          <h3 className="font-semibold text-lg">{influencer.name}</h3>
          {influencer.verified && (
            <div className="text-orange-500">
              <Star className="h-4 w-4 fill-influencer-orange" />
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm">{influencer.username}</p>
        
        <div className="mt-3">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="bg-gray-100 py-1 px-3 rounded-full">{influencer.niche}</span>
            <span className="text-xs">•</span>
            <span>{influencer.followers} followers</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">{influencer.location}</p>
        </div>
        
      
        
        <Link to={`auth/influencer/${influencer._id}`} className="w-full mt-5 py-2.5 bg-orange-500 hover:from-amber-500 hover:to-influencer-orange text-white rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-1 group">
          <span>View Profile</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  
  );
};

const TopInfluencers = () => {

  const {influencers, isError,isLoading,message} = useSelector((state) => state.admin)

  const dipatch = useDispatch()
  

  useEffect(() => {
       dipatch(getInfluencersForAdmin())
  
       if (isError && message) {
        toast.error(message, { position: "top-center" });
      }
    
    },[ isError, message])

    if (isLoading) {
      return <h1>Loading....</h1>
    }
  return (
    <div className="w-full py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Top Influencers</h2>
        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover the most in-demand creators on our platform</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers?.map((influencer) => (
          <InfluencerCard key={influencer._id} influencer={influencer} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="py-3 px-8 border-2 border-influencer-orange text-orange-500  rounded-full font-medium hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2 mx-auto">
          <span>Browse All Influencers</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TopInfluencers;
