import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { edit, getInfluencersForAdmin, removeInfluencer, resetEdit } from '../../Features/admin/adminSlice';
import { toast } from 'react-toastify';




const InfluencersListAdmin = ({setShowAddInfluencer, showAddInfluencer, onOpenModal}) => {
 

  const {influencers,isError,isLoading,message} = useSelector((state) => state.admin)
  

  const dipatch = useDispatch()

  useEffect(() => {
     dipatch(getInfluencersForAdmin())
     

     if (isError && message) {
      toast.error(message , { position: "top-center" });
    }
  
  },[ isError, message])


  
    if (isLoading) {
      return <h1>Loading....</h1>
    }

    const handleEdit =(influencer) => {
      dipatch(edit(influencer))
      dipatch(resetEdit())
      onOpenModal(() =>setShowAddInfluencer(true))
     
    }
    const handleRemove = (id) => {
      dipatch(removeInfluencer(id))
    }
  
  return (
    <>
    {influencers.map((influencer) => (
                <tr key={influencer._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{influencer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{influencer.niche}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{influencer.followers}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      influencer.isActive === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {influencer.isActive ? "Active" : "Not Available"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleEdit(influencer)} className="text-orange-500 hover:text-orange-700">Edit</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleRemove(influencer._id)} className="text-orange-500 hover:text-orange-700">Delete</button>
                  </td>
                </tr>
              ))}
    </>
  )
}

export default InfluencersListAdmin