import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersForAdmin, getInfluencersForAdmin } from '../../Features/admin/adminSlice';
import { toast } from 'react-toastify';




const UsersListAdmin = () => {
 

  const {users,isError,isLoading,message} = useSelector((state) => state.admin)
  

  const dipatch = useDispatch()

  useEffect(() => {
     dipatch(getAllUsersForAdmin())
     

     if (isError && message) {
      toast.error(message , { position: "top-center" });
    }
  
  },[ isError, message])


  
    if (isLoading) {
      return <h1>Loading....</h1>
    }
  
  return (
    <>
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Add Button */}
      <div className="flex justify-start mb-4 font-bold">
        Users
      </div>
  
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-gray-100 text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4">{user._id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
  

  )
}

export default UsersListAdmin