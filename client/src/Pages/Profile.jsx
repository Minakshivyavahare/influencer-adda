import React, { useEffect } from 'react'
import { Mail, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUsersBooking } from '../Features/booking/bookingSlice';




  
 
const Profile = () => {

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) =>state.auth)
  const {bookings, bookingsLoading,bookingsSuccess, bookingsError,bookingMessage} = useSelector((state) =>state.booking)

 
  const dispatch = useDispatch()
  const navigate = useNavigate()

    const getStatusColor = (status) => {
        switch (status) {
          case 'confirmed':
            return 'bg-green-100 text-green-800';
          case 'pending':
            return 'bg-yellow-100 text-yellow-800';
          case 'cancelled':
            return 'bg-red-100 text-red-800';
          default:
            return 'bg-gray-100 text-gray-800';
        }
      };
    
      const formatDate = (dateString) => {
        // const options: Intl.DateTimeFormatOptions = { 
        //   weekday: 'long', 
        //   year: 'numeric', 
        //   month: 'long', 
        //   day: 'numeric' 
        // };
        return new Date(dateString).toLocaleDateString(undefined);
      };

      const memberSince = "March 2024";
      const totalBookings = 3;
      const upcomingBookings = 0;


      useEffect(() => {
        if(!user){
          navigate("/login")
        }

        dispatch(getUsersBooking())

        if(isError && message || bookingsError && bookingMessage){
          toast.error(message)
        }

      },[user,isError,message, bookingMessage,bookingsError])

      if(isLoading || bookingsLoading){
        return(
          <>
          <h2>Loading...</h2>
          </>
        )
      }
  return (
    <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
          <div className="bg-[#FF6900] h-32 w-full"></div>
          <div className="flex flex-col md:flex-row items-center px-6 py-4">
            <div className="relative -mt-20 mb-4 md:mb-0">
              <img 
                src="https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg"
                alt={user?.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800">{user?.name}</h1>
              <div className="flex flex-col mt-2 space-y-2">
                <div className="flex items-center justify-center md:justify-start text-gray-600">
                  <Mail size={18} className="mr-2" />
                  <span>{user?.email}</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* -----account overview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Account Overview</h2>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-gray-600">
          <span>Member since</span>
          <span className="font-medium">{new Date(user?.memberSince).toLocaleDateString('en-IN')}</span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <span>Total bookings</span>
          <span className="font-medium">{bookings.length}</span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <span>Upcoming bookings</span>
          <span className="font-medium">{upcomingBookings}</span>
        </div>
      </div>
    </div>

        {/* Bookings List */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Your Bookings</h2>
            <span className="text-sm font-medium text-gray-500">{bookings.length} bookings</span>
          </div>
          
          {bookings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">You have no bookings scheduled.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookings?.map((booking) => (
                <div key={booking._id} className="bg-white rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">{booking?.influencer?.name}</h3>
                   <Link to={`/influencer/${booking.influencer._id}`}><span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span></Link> 
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 flex-shrink-0" />
                      <span>BookedAt : {new Date(booking.createdAt).toLocaleDateString('en-IN')}</span>
                    </div>
                    
                   
                    
                    
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile