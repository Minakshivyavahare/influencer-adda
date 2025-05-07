import React, { useEffect, useState } from 'react'

import { 
    LayoutDashboard, 
    Users, 
    MessageSquare, 
    Calendar,
    ChevronDown,
    Plus,
    Search,
    CheckCircle,
    XCircle,
    Clock,
    MoreVertical,
    X
  } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersBookingsForAdmin, updateTheBooking } from '../../Features/admin/adminSlice';
import { toast } from 'react-toastify';




const StatusBadge = ({ status }) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
    };

  
    
  
    return (
      <span className={`px-2 py-1 rounded-full text-xs ${styles[status]}`}>
        {status}
      </span>
    );
  };
const BookingListAdmin = () => {

  const {bookings,isError,isLoading,message} = useSelector((state) => state.admin)
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dipatch = useDispatch()

  const updateBookingStatus = (id,value) =>{
    dipatch(updateTheBooking({id, value}))
  }


  useEffect(() => {
     dipatch(getAllUsersBookingsForAdmin())
     

     if (isError && message) {
      toast.error(message , { position: "top-center" });
    }
  
  },[ isError, message])


  
    if (isLoading) {
      return <h1>Loading....</h1>
    }
  
  
  
  return (
    <>
     {bookings?.map((booking) => (
              <tr key={booking._id}>
                <td className="px-6 py-4 whitespace-nowrap">{booking.user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking?.influencer?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(booking.createdAt).toLocaleDateString('en-IN')}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={booking.status} />
                </td>
               <td>
                <select onChange={(e) => updateBookingStatus(booking._id,e.target.value)} value={booking.status}>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="reject">Reject</option>
                  <option value="complete">Completed</option>
                </select>
               </td>
              </tr>
            ))}
    </>
  )
}

export default BookingListAdmin