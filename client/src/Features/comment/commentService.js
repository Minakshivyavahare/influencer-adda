import axios from "axios"

const fetchComments = async(id, token) => {
    const options = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(`/api/booking/${id}/comment`, options)
    return response.data
}

const createComments = async(formData, token) => {
    const options = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(`/api/booking/${formData.id}/comment`,formData, options)
     console.log("response",response.data)
    return response.data
}

const commentService = {fetchComments, createComments}
export default commentService