import React, { useState } from 'react'
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
import SidebarItem from './SidebarItem';

const SidebarAdmin = ({handleTabChange,activeTab}) => {
     const [sidebarOpen, setSidebarOpen] = useState(true);
     
  return (
    <nav className="mt-8">
          <SidebarItem
            icon={<LayoutDashboard />}
            title="Dashboard"
            active={activeTab === 'dashboard'}
           
            onClick={() => handleTabChange('dashboard')}
            expanded={sidebarOpen }
          />
          <SidebarItem
            icon={<Users />}
            title="Influencers"
            active={activeTab === 'influencers'}
            onClick={() => handleTabChange('influencers')}
            expanded={sidebarOpen}
          />
          <SidebarItem
            icon={<Calendar />}
            title="Bookings"
            active={activeTab === 'bookings'}
            onClick={() => handleTabChange('bookings')}
            expanded={sidebarOpen}
          />
          <SidebarItem
            icon={<Users />}
            title="Users"
            active={activeTab === 'users'}
            onClick={() => handleTabChange('users')}
            expanded={sidebarOpen}
          />
          <SidebarItem
            icon={<MessageSquare />}
            title="Comments"
            active={activeTab === 'comments'}
            onClick={() => handleTabChange('comments')}
            expanded={sidebarOpen}
          />

          
        </nav>
  )

}

export default SidebarAdmin