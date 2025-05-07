import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommentsForAdmin, replyTheCommentByAdmin } from '../../Features/admin/adminSlice';
import { toast } from 'react-toastify';
import { MessageCircle } from 'lucide-react';

const CommentsListAdmin = () => {

  const {comments,isError,isLoading,message} = useSelector((state) => state.admin)
  const [activeReplyId, setActiveReplyId] = useState('');
  const [replyText, setReplyText] = useState('');
 

  const dipatch = useDispatch()

  useEffect(() => {
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

    const handleReplySubmit = (bid) => {
    
     dipatch(replyTheCommentByAdmin({text:replyText, bid}))
     setReplyText("")
     setActiveReplyId('')
    }
  
   
  return (
  
        <div className="bg-white rounded-lg shadow p-6">
         
              <>
              <h1 className="text-xl font-semibold mb-4">Recent Comments</h1>
              {
                comments?.map((comment) => {
                
                  return(
                    <>
                        <div className="mb-4">
      <div className="flex justify-between items-start mb-1">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700">Comment By : {comment.user.name}</span>
        </div>
        <span className="text-gray-500 text-sm">{new Date(comment.createdAt).toLocaleDateString('en-IN')}</span>
      </div>

      <p className="text-gray-600 mb-1">{comment.text}</p>
      
      <div className="text-sm text-gray-500 mb-2">
        Booking Reference:  {comment?.booking?._id}
      </div>

      {!activeReplyId ? (
        <button
          onClick={() => setActiveReplyId(comment._id)}
          className="text-blue-500 text-sm hover:text-blue-600"
        >
          Reply
        </button>
      ) : (
        <form  className="mt-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() =>  setActiveReplyId(false)}
              className="text-gray-500 text-sm hover:text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => handleReplySubmit(comment?.booking?._id)}
              className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      )}

      
    </div>
                  
                    </>
                  )
                })
              }
           
              </>
         
         
        </div>
        
  )
}

export default CommentsListAdmin