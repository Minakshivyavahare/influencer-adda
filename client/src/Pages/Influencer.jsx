import React, { useEffect } from 'react'
import { Search, Bell, Menu, User } from 'lucide-react';
import { MapPin, Award, ChevronRight } from 'lucide-react';
import { Grid2x2 } from 'lucide-react';

import { FileText, Target } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getInfluencer } from '../Features/influencers/influencerSlice';
import CommentSection from '../components/CommentSection';
import { addBooking, getUserBooking } from '../Features/booking/bookingSlice';



const Influencer = () => {

    const {influencer,isLoading,isError, message} = useSelector((state) => state.influencer)
     const {bookings,booking, bookingsLoading, bookingsError,bookingMessage} = useSelector((state) =>state.booking)

    
  
    const dispatch = useDispatch()
    const {id} = useParams()

    const handleBooking = (id) => {
      dispatch(addBooking(id))
    }

    useEffect(() =>{

        dispatch(getInfluencer(id))
        if(bookingDetail.length > 0){
          dispatch(getUserBooking(bookingDetail[0]._id))
        }
      
    },[])

    useEffect(() =>{
        if(isError && message || bookingsError && bookingMessage){
            toast.error(message)
        }

    },[isError,message, bookingMessage, bookingsError])

    if(isLoading || bookingsLoading){
        return(
            <>
            <h2>Loading...</h2>
            </>
        )
    }

    const bookingDetail = bookings.filter((booking) => booking.influencer._id === id)

    
  return (
    <div className="min-h-screen bg-gray-50">
     
      <main>
        {/* prfile hero page */}
        <div className="relative">
      {/* Cover Image */}
      <div className="h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
        <img 
          src="https://img.freepik.com/premium-photo/orange-simple-plain-background-texture-smooth-light-gardient-blur-wallpaper_41691-2988.jpg"
          alt="influencer" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24 sm:-mt-32 flex flex-col md:flex-row md:items-end">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative h-40 w-40 rounded-full overflow-hidden bg-white shadow-lg">
              <img 
                src={influencer?.profilePic}
                alt={influencer?.name} 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          {/* Basic Info */}
          <div className="mt-6 md:mt-0 md:ml-6 flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{influencer?.name}</h1>
                <div className="mt-1 flex flex-wrap items-center text-gray-600">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                    <Award size={14} className="mr-1" />
                 {influencer?.category}
                  </span>
                  <span className="flex items-center text-sm mr-4">
                    <span className="font-medium text-gray-900 mr-1">{influencer?.followers}</span> followers
                  </span>
                  <span className="flex items-center text-sm">
                    <MapPin size={16} className="mr-1" />
                  {influencer?.location}
                  </span>

                  <span className="flex items-center text-sm mx-2">
                  <Grid2x2 size={16} className="mr-1"/>
                  {influencer?.instagram_handle} 
                  </span>
                 
                </div>
                
              </div>
              
              {/* Book Button */}
              <div className="mt-4 md:mt-0">
                
                <button disabled={!influencer.isActive} onClick={() => handleBooking(influencer._id)} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                 {influencer.isActive ? "Request Booking" : "Already Booked"}
                  <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       {/* profile bio */}
       <div className="py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bio Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FileText size={20} className="mr-2 text-blue-600" />
              About
            </h2>
            <p className="text-gray-700 leading-relaxed">
           Booking Amount: INR {influencer?.rate}/event
            </p>
            <p className="text-gray-700 leading-relaxed">
           bio : Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime, odio eos deleniti laborum totam illum pariatur repellat. Perferendis facilis impedit esse illum possimus voluptates dolores aliquid iure officiis adipisci.
            </p>

            <p className="text-gray-700 leading-relaxed">
            Booking Id : {!booking ? "" : booking?._id}
            </p>
           
           
          </div>
          
          {/* Expertise Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Target size={20} className="mr-2 text-blue-600" />
              Expertise
            </h2>
           
            {/* Pricing Section */}
            <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">
              Pricing
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
             
              <div className="mt-4 text-xs text-gray-500">
                * Prices may vary based on campaign requirements and deliverables
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
     
              {/* comment section */}
              {
                !influencer.isActive ? ( <>  <CommentSection/></>) : (
                  <> <h1 className='my-8 text-center text-2xl'>Comments Only Available For Booked Influencer</h1></>
                )
              }
            
  
      </main>
    
    </div>
  )
}

export default Influencer