import { useState } from "react";
import BookingListAdmin from "./BookingListAdmin";

const BookingsList = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
  
    const handleAction = (bookingId, action) => {
      console.log(`Booking ${bookingId}: ${action}`);
      setActiveDropdown(null);
    };

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
  
    return (
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Influencer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
             <BookingListAdmin/>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default BookingsList 