import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCooments } from "../Features/comment/commentSlice";


//  Comment: {
//   id: string;
//   username: string;
//   userAvatar: string;
//   content: string;
//   createdAt: Date;
//   likes: number;
// }

const CommentSection = () => {
 
  const [comment, setComment] = useState("");
  const {comments, commentLoading, commentError, commentMessage} = useSelector((state) => state.comment)
  const {booking} = useSelector((state) => state.booking)

  const dispatch = useDispatch()

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() === "") {
      toast({
        title: "Error",
        description: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }

    const newComment = {
      id: Date.now().toString(),
      username: "Current User",
      userAvatar: "https://i.pravatar.cc/150?img=8",
      content: comment,
      createdAt: new Date(),
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setComment("");
    
    toast({
      description: "Comment posted successfully!",
    });
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
    toast({
      description: "Comment deleted",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  };

  useEffect(() =>{
    dispatch(getCooments(booking._id))
  },[])

  useEffect(() => {

    if(commentError && commentMessage){
      toast.error(commentMessage)
    }

  },[commentError,commentMessage])
   
  
    if(commentLoading){
      return(
        <>
        <h2>Loading....</h2>
        </>
      )
    }
  

  return (
   
    <div className="w-full  mx-auto px-4 py-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Comments
        </h2>
        
        {/* Comment Form */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden border">
              <img src="https://i.pravatar.cc/150?img=8" alt="User" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Add a comment..."
                value={comment}
                onChange={handleCommentChange}
                className="w-full min-h-24 mb-2 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <div className="flex justify-end">
                <button 
                  onClick={handleSubmitComment}
                  className="flex items-center gap-1 px-4 py-2 bg-[#FF6900] text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Post 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comments List */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                   
                    <div>
                      <p className="font-medium">{comment.username}</p>
                      <p className="text-xs text-gray-500">{formatDate(comment.createdAt)}</p>
                    </div>
                  </div>
                  {comment.username === "Current User" && (
                    <div className="flex gap-2">
                      <button
                        className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button
                        className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-red-600"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-gray-700">
                  <p>{comment.content}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                 
                  
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;