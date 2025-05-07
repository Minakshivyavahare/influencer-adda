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
import InfluencersListAdmin from '../components/Admin/InfluencersListAdmin';

import BookingsList from '../components/Admin/BookingList';
import CommentsListAdmin from '../components/Admin/CommentsListAdmin';
import UsersListAdmin from '../components/Admin/UsersListAdmin';
import DashboardAdmin from '../components/Admin/DashboardAdmin';
import SidebarAdmin from '../components/Admin/SidebarAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { createInfluencer, updateTheInfluencer } from '../Features/admin/adminSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddInfluencer, setShowAddInfluencer] = useState(false);
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  const[formData, setFormData] = useState({
    name:"", niche:"" , instagram_handle:"", followers:"",
    location:'' , rate:"" , gender:"" , profilePic:""
  })

  const {edit} = useSelector((state) => state.admin)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardAdmin />;
      case 'influencers':
        return <InfluencersList onOpenModal={() => setShowAddInfluencer(true)} />;
      case 'bookings':
        return <BookingsList />;
      case 'users':
        return <UsersListAdmin/>;
      case 'comments':
        return <CommentsListAdmin />
      default:
        return <DashboardAdmin />;
    }
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    !edit.isEdit ?   dispatch(createInfluencer(formData)) : dispatch(updateTheInfluencer(formData))
   
    setFormData({
        name:"", niche:"" , instagram_handle:"", followers:"",
    location:'' , rate:"" , gender:"" , profilePic:""
    })
  }

  useEffect(() =>{
     setFormData(edit.influencer)
  },[edit])

  useEffect(() =>{

    if(!user?.isAdmin){
      navigate('/')
    }
    if(!user){
      navigate('/login')
    }
    if(isError && message){
      toast.error(message)
    }

  }, [user,isError,message])

  if(isLoading){
    return(
      <>
      <h2>Loading....</h2>
      </>
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
      <div className="p-4 flex items-center justify-between">
        <h1 className={`text-xl font-bold text-orange-500 ${!sidebarOpen && 'hidden'}`}>Admin Panel</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
          <ChevronDown className={`transform ${sidebarOpen ? 'rotate-0' : 'rotate-180'}`} />
        </button>
      </div>

      <SidebarAdmin handleTabChange={handleTabChange} activeTab={activeTab}/>
      </div>

       {/* Main Content */}
       <div className="flex-1 overflow-auto">
       
        
        <main className="p-8">
          {renderContent()}
        </main>

        {/* Add Influencer Modal */}
        {showAddInfluencer && (
          <div className="fixed inset-0  bg-sky-50/50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mt-90">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">Add New Influencer</h2>
                <button 
                  onClick={() => setShowAddInfluencer(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter influencer name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Niche
                  </label>
                  <input
                    type="text"
                    name='niche'
                    value={formData.niche}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter niche"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    name='instagram_handle'
                    value={formData.instagram_handle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter Instagram Handle"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Followers
                  </label>
                  <input
                    type="text"
                    name='followers'
                    value={formData.followers}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 500K"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name='location'
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rate
                  </label>
                  <input
                    type="rate"
                    name='rate'
                    value={formData.rate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter Rate"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Pic URL
                  </label>
                  <input
                    type="profilePic"
                    name='profilePic'
                    value={formData.profilePic}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter Rate"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <input
                    type="gender"
                    name='gender'
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter Rate"
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddInfluencer(false)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    {!edit.isEdit ? "Add Influencer" : "Update Influencer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const InfluencersList = ({ onOpenModal ,showAddInfluencer,setShowAddInfluencer}) => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b">
      <div className="flex items-center gap-4">
     
        <button 
          onClick={onOpenModal}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600"
        >
          <Plus size={20} />
          Add Influencer
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niche</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Followers</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <InfluencersListAdmin   showAddInfluencer={showAddInfluencer}
       setShowAddInfluencer={setShowAddInfluencer} onOpenModal={onOpenModal}/>
        </tbody>
      </table>
    </div>
  </div>
 
);









export default AdminDashboard