import React, { useEffect } from 'react'
import StatCard from './StatCard'
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

import { toast } from 'react-toastify';

import { getAllCommentsForAdmin, getAllUsersBookingsForAdmin, getAllUsersForAdmin, getInfluencersForAdmin } from '../../Features/admin/adminSlice';

const DashboardAdmin = () => {

  const {influencers,bookings,comments, users,isError,isLoading,message} = useSelector((state) => state.admin)
  

  const dipatch = useDispatch()

  useEffect(() => {
     dipatch(getInfluencersForAdmin())
     dipatch(getAllUsersBookingsForAdmin())
     dipatch(getAllUsersForAdmin())
     dipatch(getAllCommentsForAdmin())
  
  },[])

  useEffect(() => {
    if (isError && message) {
      toast.error(message, { position: "top-center" });
    }
  }, [isError, message]);

  
    if (isLoading) {
      return <h1>Loading....</h1>
    }
  
  return (
   <>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatCard title="Total Influencers" value={influencers.length} icon={<Users className="text-orange-500" />} />
    <StatCard title="Active Bookings" value={bookings.length} icon={<Calendar className="text-green-500" />} />
    <StatCard title="Total Users" value={users.length -1} icon={<Users className="text-blue-500" />} />
    <StatCard title="New Comments" value={comments.length} icon={<MessageSquare className="text-purple-500" />} />
  </div>
     </>
           
  )
}

export default DashboardAdmin